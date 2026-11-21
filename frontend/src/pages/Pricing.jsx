import React, { useState } from 'react';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isPerKg, setIsPerKg] = useState(true);

  const plans = [
    {
      name: 'Basic Wash',
      desc: 'Perfect for everyday wear and simple fabrics.',
      priceKg: 50,
      priceItem: 20,
      features: ['Machine wash & dry', 'Basic fold', '24hr turnaround', 'Standard detergent'],
      popular: false,
      accent: 'border-gray-200',
      badge: null,
    },
    {
      name: 'Premium Care',
      desc: 'Ideal for delicate fabrics, special items.',
      priceKg: 150,
      priceItem: 70,
      features: ['Hand wash / dry clean', 'Iron & fold', '12hr fast-track', 'Premium softener', 'Stain treatment'],
      popular: true,
      accent: 'border-yellow-400',
      badge: 'Most Popular',
    },
    {
      name: 'Family Pack',
      desc: 'Heavy loads like blankets, curtains, etc.',
      priceKg: 100,
      priceItem: 50,
      features: ['Large load capacity', 'Deep stain removal', 'Anti-bacterial wash', 'Free pickup/delivery'],
      popular: false,
      accent: 'border-gray-200',
      badge: null,
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-grid">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-600 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200 mb-4"
          >
            No Hidden Fees
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black font-poppins text-gray-900 mb-4">
            Transparent <span className="text-yellow-500">Pricing</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg mb-10">
            Choose how you want to be billed and get sparkling clean laundry. No surprises, ever.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1.5 border border-gray-200 shadow-inner">
            <button
              id="toggle-per-kg"
              onClick={() => setIsPerKg(true)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                isPerKg
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Per Kg
            </button>
            <button
              id="toggle-per-item"
              onClick={() => setIsPerKg(false)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                !isPerKg
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Per Item
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`glass-card p-8 md:p-10 flex flex-col relative bg-white border-2 ${
                plan.popular
                  ? 'border-yellow-400 shadow-[0_20px_50px_rgba(250,204,21,0.2)] md:-translate-y-6 md:hover:-translate-y-8 z-10'
                  : `${plan.accent} hover:border-yellow-200`
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center shadow-lg border border-yellow-500 pulse-glow">
                    <Star size={12} className="mr-1.5 fill-gray-900" /> {plan.badge}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-black font-poppins text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 font-medium text-sm mb-8 h-10">{plan.desc}</p>

              {/* Price */}
              <div className="mb-8">
                <motion.span
                  key={isPerKg ? plan.priceKg : plan.priceItem}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-black text-gray-900"
                >
                  ₹{isPerKg ? plan.priceKg : plan.priceItem}
                </motion.span>
                <span className="text-gray-400 font-bold ml-1">/{isPerKg ? 'kg' : 'item'}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="text-yellow-500 shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/login"
                className={`w-full py-3.5 rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg shadow-yellow-400/25 hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-gray-900 border border-gray-200 hover:border-yellow-500'
                }`}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-10 border border-gray-100"
        >
          <h3 className="text-2xl font-black font-poppins text-gray-900 mb-3">
            Need a custom plan?
          </h3>
          <p className="text-gray-500 font-medium mb-6 max-w-lg mx-auto">
            For businesses, hostels, or bulk orders — we offer custom pricing tailored to your needs.
          </p>
          <a href="mailto:support@laundryrage.com" className="primary-button">
            Contact Us <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
