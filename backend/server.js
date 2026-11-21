import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/users', userRoutes);

// Smart App Redirect for QR Code
app.get('/download', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const appStoreUrl = 'https://apps.apple.com/in/app/laundryrage/id6747644693';
  const playStoreUrl = 'https://play.google.com/store/search?q=laundryrage&c=apps&hl=en_IN';

  // Detect iOS
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return res.redirect(appStoreUrl);
  } 
  // Detect Android
  else if (/Android/.test(userAgent)) {
    return res.redirect(playStoreUrl);
  } 
  // Default (PC or other)
  else {
    return res.redirect(playStoreUrl);
  }
});

// Serve the admin dashboard
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// Serve static frontend files from dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve the frontend app for any unmatched routes (except admin and API)
app.get(/(.*)/, (req, res) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/admin')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('');
  console.log('  🧺 LaundryRage Backend API');
  console.log(`  ➜  API:    http://localhost:${PORT}`);
  console.log(`  ➜  Admin:  http://localhost:${PORT}/admin`);
  console.log('');
});
