import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // Wash & Fold, Dry Clean, Iron, Premium
  price: { type: Number, required: true },
  unit: { type: String, required: true }, // 'kg' or 'item'
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
