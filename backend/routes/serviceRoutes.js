import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const services = await Service.find({});
    // Default seed if empty
    if (services.length === 0) {
      const defaultServices = [
        { name: 'Wash & Fold', description: 'Everyday clothes washing', category: 'Wash & Fold', price: 50, unit: 'kg', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2671&auto=format&fit=crop' },
        { name: 'Dry Cleaning', description: 'Special care for delicate fabrics', category: 'Dry Clean', price: 150, unit: 'item', image: 'https://images.unsplash.com/photo-1582735689369-0df5e6eac75d?q=80&w=2670&auto=format&fit=crop' },
        { name: 'Ironing', description: 'Crisp and wrinkle-free', category: 'Iron', price: 20, unit: 'item', image: 'https://images.unsplash.com/photo-1626244795368-21d3f2af7d0e?q=80&w=2670&auto=format&fit=crop' },
        { name: 'Premium Care', description: 'Hand-washed with premium detergents', category: 'Premium', price: 200, unit: 'item', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2624&auto=format&fit=crop', isFeatured: true }
      ];
      await Service.insertMany(defaultServices);
      const inserted = await Service.find({});
      return res.json(inserted);
    }
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
