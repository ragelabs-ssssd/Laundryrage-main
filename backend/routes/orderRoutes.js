import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { user, items, totalAmount, pickupDate, deliveryDate, address } = req.body;
    const order = new Order({
      user,
      items,
      totalAmount,
      pickupDate,
      deliveryDate,
      address
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('items.service');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
