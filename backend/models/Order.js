import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  pickupDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Picked', 'Processing', 'Delivered'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
