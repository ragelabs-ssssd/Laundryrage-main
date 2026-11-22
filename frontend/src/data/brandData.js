export const BRAND = {
  name: 'LaundryRage',
  tagline: 'Your Weekend Isn’t Made for Laundry.',
  heroSub:
    'Book a doorstep pickup in 15 seconds across Bhubaneswar. We wash every order 100% separately in sanitized drums, steam-press to perfection, and deliver fresh in under 24 hours.',
  address: 'Bhubaneswar, Odisha',
  areas: [
    { name: 'Jagamara', hub: 'Main Hub', window: '25 mins pickup', note: 'Express <24h active' },
    { name: 'Khandagiri', hub: '1.8 km away', window: '35 mins pickup', note: 'Express <24h active' },
    { name: 'Patia', hub: 'Tech Corridor', window: '45 mins pickup', note: 'Morning & Evening slots' },
    { name: 'Saheed Nagar', hub: 'Central Hub', window: '40 mins pickup', note: 'Express <24h active' },
    { name: 'Nayapalli', hub: '2.5 km away', window: '35 mins pickup', note: 'Express <24h active' },
    { name: 'IRC Village', hub: '3.1 km away', window: '40 mins pickup', note: 'Same-day Steam Iron' },
  ],
  phoneDisplay: '+91 9937032631',
  phoneHref: 'tel:+919937032631',
  email: 'support@laundryrage.com',
  whatsapp: 'https://wa.me/919937032631',
  instagram: 'https://www.instagram.com/laundryrage/?hl=en',
  playStore: 'https://play.google.com/store/search?q=laundryrage&c=apps&hl=en_IN',
  appStore: 'https://apps.apple.com/in/app/laundryrage/id6747644693',
  qrImage: '/qr-refined.jpg',
  logo: '/logo-new.png',
  heroVideo: '/videos/home-bg-2.mp4',
};

export const STATS = [
  { value: '5,000+', label: 'Bhubaneswar Customers' },
  { value: '4.7★', label: 'App Store & Play Rating' },
  { value: '<24 Hrs', label: 'Express Doorstep Return' },
  { value: '100%', label: 'Solo-Drum Hygiene' },
];

export const HYGIENE_CHAPTERS = [
  {
    id: 'sanitize',
    tag: '01 / Sanitization',
    title: 'Ozone-Sanitized Drums Before Every Load.',
    desc: 'Every drum goes through a high-temperature sanitization cycle before your clothes enter. Your wardrobe never shares water, detergent, or drum space with anyone else.',
    img: '/images/indian-hero-1.jpg',
    specs: ['Zero cross-contamination', 'Fresh RO-treated water', 'Digital batch tagging'],
  },
  {
    id: 'enzyme',
    tag: '02 / Bio-Enzyme Care',
    title: 'Gentle on Colors. Tough on Everyday Grime.',
    desc: 'We use pH-balanced bio-enzyme detergents and softeners calibrated for Indian cottons, linens, and activewear—preventing fading and fabric stiffness.',
    img: '/images/indian-hero-2.jpg',
    specs: ['No harsh optical bleaches', 'Color-lock cold/warm cycles', 'Anti-bacterial rinse'],
  },
  {
    id: 'steam',
    tag: '03 / Precision Finish',
    title: 'Commercial Steam-Press & Crisp Folding.',
    desc: 'Garments are finished with temperature-controlled steam presses and packed breathable—ready to hang in your wardrobe the moment they arrive.',
    img: '/images/ironing-5.jpg',
    specs: ['Zero scorch or shine marks', 'Hanger or flat-fold option', 'Moisture-sealed packaging'],
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'Tap & Schedule (15s)',
    desc: 'Pick a convenient doorstep pickup slot in Jagamara, Patia, or nearby Bhubaneswar hubs.',
  },
  {
    step: '02',
    title: 'Doorstep Tagging',
    desc: 'Our rider tags and weighs your laundry bag at your door with transparent in-app pricing.',
  },
  {
    step: '03',
    title: 'Sanitized Solo-Wash',
    desc: 'Your clothes are washed 100% separately in sanitized drums with bio-enzyme detergents.',
  },
  {
    step: '04',
    title: 'Crisp Wardrobe Delivery',
    desc: 'Returned neatly folded or steam-pressed to your doorstep in under 24 hours.',
  },
];

export const SERVICES = [
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    price: '',
    turnaround: '<48h',
    badge: 'Most Popular',
    img: '/images/indian-hero-5-counter.jpg',
    desc: 'Everyday clothes washed separately in sanitized drums and neatly folded.',
    features: ['100% separate solo-drum wash', 'Bio-enzyme detergent & softener', 'Crisp wardrobe-ready fold'],
  },
  {
    id: 'steam-ironing',
    name: 'Steam Ironing',
    price: '',
    turnaround: '<48h',
    badge: 'Wrinkle-Free',
    img: '/images/ironing-1.jpg',
    desc: 'Precision steam pressing for shirts, trousers, kurtas, and office formals.',
    features: ['Temperature-controlled steam', 'Zero scorch or shine marks', 'Hanger or flat-fold delivery'],
  },
  {
    id: 'priority-care',
    name: 'Priority Wash',
    price: 'Premium',
    turnaround: '<24h',
    badge: 'VIP Express',
    premium: true,
    img: '/images/indian-hero-3.jpg',
    desc: 'Our premium fast-tracked solo wash, dry, and crisp finish—guaranteed doorstep delivery within 24 hours.',
    features: ['First-in-line VIP solo drum', 'Delivered within 24 hours', 'Live rider tracking in app'],
  },
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    price: 'Coming Soon',
    turnaround: '48h',
    badge: 'Soon',
    soon: true,
    img: '/images/drycleaning-blazer-v1.jpg',
    desc: 'Gentle solvent-based care for silk sarees, blazers, lehengas, and woolens.',
    features: ['Targeted stain pre-treatment', 'Suit & blazer shape retention', 'Breathable garment covers'],
  },
];

export const REVIEWS = [
  {
    name: 'Ananya Mohanty',
    area: 'Patia, Bhubaneswar',
    role: 'Product Designer',
    quote:
      'Finally a laundry service in Bhubaneswar that doesn’t mix clothes. My whites actually stay white and the 24-hour pickup-to-doorstep turnaround is spot on.',
  },
  {
    name: 'Rohan Das',
    area: 'Jagamara, Bhubaneswar',
    role: 'Software Engineer',
    quote:
      'Scheduling takes 15 seconds in the app, and the steam-pressed office shirts come back looking sharper than hotel valet service.',
  },
  {
    name: 'Subham Patnaik',
    area: 'Khandagiri, Bhubaneswar',
    role: 'Postgrad Student',
    quote:
      'Used the 50% off first-order code with my hostel roommates. Earned 2,000 wallet coins on referrals too—genuinely effortless.',
  },
];

export const REFERRAL = {
  badge: 'LaundryRage Rewards',
  title: 'Refer Roommates & Friends — Earn 2,000 Coins',
  desc: 'Share your invite code from the app. When your friend completes their first Bhubaneswar order, you both earn 2,000 wallet coins.',
};

export const FAQS = [
  {
    q: 'Are my clothes washed together with other customers’ clothes?',
    a: 'Never. Every LaundryRage order is washed 100% separately in its own sanitized drum with fresh water and bio-enzyme detergent.',
  },
  {
    q: 'How fast is the pickup and delivery turnaround in Bhubaneswar?',
    a: 'Standard Wash & Fold and Steam Ironing are delivered within 48 hours. Priority Wash orders are fast-tracked for guaranteed delivery within 24 hours.',
  },
  {
    q: 'How do I pay? Do you support UPI and wallet credits?',
    a: 'Yes! Pay seamlessly in the app via UPI (PhonePe, GPay, Paytm), cards, net banking, or your LaundryRage wallet coins.',
  },
  {
    q: 'Which areas of Bhubaneswar do you currently cover?',
    a: 'We operate out of our Jagamara hub and serve Jagamara, Khandagiri, Patia, Saheed Nagar, Nayapalli, IRC Village, and nearby neighborhoods.',
  },
  {
    q: 'What if I have delicate fabrics or special stain instructions?',
    a: 'You can add garment-care notes right inside the app before pickup, or let our doorstep rider know during tagging.',
  },
];
