import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readDB, writeDB, generateId } from '../db.js';
import { sendLoginNotification } from '../mailer.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'laundryrage_secret_2026';

/**
 * ============================================================================
 * ADMIN AUTHENTICATION CONTROL SECTION
 * ============================================================================
 * File: backend/routes/userRoutes.js
 * 
 * TO ADD/REMOVE ADMINS:
 * Simply add or remove the email addresses in the ALLOWED_ADMINS array below.
 * Emails are case-insensitive.
 * ============================================================================
 */
const ALLOWED_ADMINS = [
  'ronitrishi05@gmail.com',
  'seemanchalmohanty@gmail.com',
  'ayogeshkumar22@gmail.com',
  'nayakkalpana501@gmail.com',
  'sahooswarup60@gmail.com'
];

const isAdmin = (email) => ALLOWED_ADMINS.includes(email.toLowerCase());

/**
 * Middleware: adminOnly
 * Validates JWT token and checks if the user has the 'admin' role 
 * AND their email is in the white-list above.
 */
const adminOnly = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Admin access required' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const db = readDB();
    const user = db.users.find(u => u._id === decoded.id);
    
    if (user && user.role === 'admin' && isAdmin(user.email)) {
      req.user = user;
      next();
    } else {
      console.warn(`🚫 Unauthorized admin access attempt by: ${user ? user.email : 'Unknown'}`);
      res.status(403).json({ message: 'Access denied: You do not have admin privileges' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Session expired or invalid token' });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });
};

// POST /api/users/signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const db = readDB();

    // Check if user already exists
    const existing = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = {
      _id: generateId(),
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      // ROLE ASSIGNMENT LOGIC: Only users in the ALLOWED_ADMINS list get the 'admin' role
      role: isAdmin(email) ? 'admin' : 'user',
      createdAt: new Date().toISOString(),
    };

    db.users.push(newUser);

    // Log the signup
    db.loginLogs.push({
      _id: generateId(),
      userId: newUser._id,
      name: newUser.name,
      email: newUser.email,
      action: 'signup',
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection?.remoteAddress || 'unknown',
    });

    writeDB(db);

    const responseUser = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token: generateToken(newUser._id),
    };

    // Send email notification (non-blocking)
    sendLoginNotification(responseUser, 'signup').catch(() => {});

    console.log(`✅ New ${newUser.role} signed up: ${newUser.email}`);
    res.status(201).json(responseUser);
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const db = readDB();

    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Log the login
    db.loginLogs.push({
      _id: generateId(),
      userId: user._id,
      name: user.name,
      email: user.email,
      action: 'login',
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection?.remoteAddress || 'unknown',
    });

    writeDB(db);

    const responseUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    };

    // Send email notification (non-blocking)
    sendLoginNotification(responseUser, 'login').catch(() => {});

    console.log(`✅ User logged in: ${user.email} (Role: ${user.role})`);
    res.json(responseUser);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// GET /api/users — Protected Admin Route: list all users
router.get('/', adminOnly, (req, res) => {
  try {
    const db = readDB();
    const users = db.users.map(u => ({
      _id: u._id,
      name: u.name,
      email: u.email,
      role: u.role,
      createdAt: u.createdAt,
    }));
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/users/logs — Protected Admin Route: get login logs
router.get('/logs', adminOnly, (req, res) => {
  try {
    const db = readDB();
    // Return latest 100 logs, most recent first
    const logs = (db.loginLogs || []).slice(-100).reverse();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/users/stats — Protected Admin Route: dashboard stats
router.get('/stats', adminOnly, (req, res) => {
  try {
    const db = readDB();
    const totalUsers = db.users.length;
    const totalLogins = (db.loginLogs || []).filter(l => l.action === 'login').length;
    const totalSignups = (db.loginLogs || []).filter(l => l.action === 'signup').length;

    // Users in last 24h
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const recentLogins = (db.loginLogs || []).filter(l => l.timestamp > oneDayAgo).length;

    res.json({
      totalUsers,
      totalLogins,
      totalSignups,
      recentLogins,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
