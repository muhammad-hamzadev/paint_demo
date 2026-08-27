export const categoriesData = [
  {
    id: 'interior',
    name: 'Interior Paints',
    icon: 'BedDouble',
    color: '#0B2265',
    bg: '#EBF1FF',
    count: 24,
    description: 'Luxurious sheens, easy washability & vibrant indoor colors.'
  },
  {
    id: 'exterior',
    name: 'Exterior Paints',
    icon: 'Home',
    color: '#10B981',
    bg: '#ECFDF5',
    count: 18,
    description: 'Weather-shielding, UV protection & mold resistance.'
  },
  {
    id: 'wood',
    name: 'Wood Finishes',
    icon: 'Armchair',
    color: '#D97706',
    bg: '#FFFBEB',
    count: 14,
    description: 'Natural wood stains, sealers, and high-gloss varnishes.'
  },
  {
    id: 'metal',
    name: 'Metal Paints',
    icon: 'Shield',
    color: '#6366F1',
    bg: '#EEF2FF',
    count: 12,
    description: 'Anti-corrosion primers and glossy synthetic enamels.'
  },
  {
    id: 'texture',
    name: 'Texture Paints',
    icon: 'Sparkles',
    color: '#06B6D4',
    bg: '#ECFEFF',
    count: 16,
    description: 'Granite, metallic, suede, and architectural finishes.'
  },
  {
    id: 'primers',
    name: 'Primers & Putty',
    icon: 'Paintbrush',
    color: '#3B82F6',
    bg: '#EFF6FF',
    count: 10,
    description: 'Flawless base preparation, crack filling & maximum adhesion.'
  },
  {
    id: 'car',
    name: 'Car Paints',
    icon: 'Car',
    color: '#EF4444',
    bg: '#FEF2F2',
    count: 8,
    description: 'Automotive 2K basecoats, clearcoats, and body primers.'
  },
  {
    id: 'industrial',
    name: 'Industrial Paints',
    icon: 'Factory',
    color: '#F59E0B',
    bg: '#FFFBEB',
    count: 20,
    description: 'Heavy-duty epoxy, polyurethane & anti-acid coatings.'
  }
];

export const productsData = [
  {
    id: 'silk-touch',
    name: 'ZIK Silk Touch Emulsion',
    tagline: 'For Walls & Ceilings • Luxurious Sheen',
    category: 'interior',
    categoryName: 'Interior Paints',
    price: 5200,
    rating: 5.0,
    reviewsCount: 198,
    image: './assets/images/product-silk-touch.svg',
    badge: 'Popular Choice',
    badgeColor: '#7A162B',
    description: 'Our flagship interior emulsion creates an ultra-smooth, silky feel with rich color depth. Formulated with ultra-fine pigments for brilliant opacity and effortless stain resistance that wipes clean without losing sheen.',
    sizes: [
      { size: '1 Litre (Quarter)', price: 1450 },
      { size: '4 Litres (Gallon)', price: 5200 },
      { size: '16 Litres (Drum)', price: 19800 }
    ],
    features: [
      '#1 Quality Interior Emulsion',
      'Smooth Wall Surfaces & High Opacity',
      'Ultra Stain-Resistant & Easy Clean',
      'Low Odor & Zero Harmful VOCs',
      'Long Lasting Vibrant Colors'
    ],
    coverage: '14 - 16 m² / Litre / Coat',
    dryingTime: 'Touch Dry: 20 mins | Recoat: 2 - 3 hours',
    sheen: 'Silky Pearl Sheen'
  },
  {
    id: 'smooth-putty',
    name: 'ZIK Smooth Wall Putty',
    tagline: 'Surface Preparation • Lifetime Protection',
    category: 'primers',
    categoryName: 'Primers & Putty',
    price: 2900,
    rating: 4.9,
    reviewsCount: 115,
    image: './assets/images/product-smooth-putty.svg',
    badge: 'Top Base',
    badgeColor: '#1A1D20',
    description: 'Ready-to-use premium acrylic filler paste designed for skim-coating interior and exterior walls. Fills microscopic pinholes and uneven hair cracks to achieve a glass-like mirror smooth painting base.',
    sizes: [
      { size: '5 Kg Tub', price: 950 },
      { size: '20 Kg Bucket', price: 2900 },
      { size: '40 Kg Sack', price: 5400 }
    ],
    features: [
      'Lifetime Warranty Base Formula',
      'Interior / Exterior Versatility',
      'Exceptional Sanding Ease',
      'Smooth Glass-like Wall Finish',
      'Anti-Fungal Protection'
    ],
    coverage: '1.2 - 1.5 m² / Kg (2 coats)',
    dryingTime: 'Touch Dry: 45 mins | Sanding: 4 - 6 hours',
    sheen: 'Smooth White Matt'
  },
  {
    id: 'aqueous-primer',
    name: 'ZIK Aqueous Wall Primer',
    tagline: 'Surface Preparation • Deep Adhesion',
    category: 'primers',
    categoryName: 'Primers & Putty',
    price: 3600,
    rating: 4.8,
    reviewsCount: 89,
    image: './assets/images/product-aqueous-primer.svg',
    badge: 'Essential Prep',
    badgeColor: '#0A2E6E',
    description: 'High-penetration water-based wall sealer that penetrates deep into plaster and masonry to neutralize alkaline efflorescence and create an unbeatable bonding surface for topcoats.',
    sizes: [
      { size: '1 Litre (Quarter)', price: 980 },
      { size: '4 Litres (Gallon)', price: 3600 },
      { size: '16 Litres (Drum)', price: 13500 }
    ],
    features: [
      'Alkali & Moisture Resistant Sealer',
      'Improves Topcoat Spread by 25%',
      'Stops Paint Peeling & Flaking',
      'Quick Drying Waterborne Formula',
      'Perfect Base for All Wall Finishes'
    ],
    coverage: '13 - 15 m² / Litre / Coat',
    dryingTime: 'Touch Dry: 20 mins | Recoat: 2 hours',
    sheen: 'Matt Sealer'
  },
  {
    id: 'weather-shield',
    name: 'ZIK Weather Shield',
    tagline: '100% Acrylic Based • Extreme Weather Guard',
    category: 'exterior',
    categoryName: 'Exterior Paints',
    price: 4800,
    rating: 4.9,
    reviewsCount: 142,
    image: './assets/images/product-weather-shield.svg',
    badge: 'Best Seller',
    badgeColor: '#0F4C30',
    description: 'Engineered with 100% pure acrylic polymers to shield exterior walls against severe UV rays, monsoon rains, and fungal growth. Delivers a durable, dirt-resistant finish that stays fresh for years.',
    sizes: [
      { size: '1 Litre (Quarter)', price: 1350 },
      { size: '4 Litres (Gallon)', price: 4800 },
      { size: '16 Litres (Drum)', price: 18200 }
    ],
    features: [
      'All Weather Protection & UV Defense',
      'Anti-Fungal & Anti-Algae Shield',
      'Excellent Wall Coverage & Durability',
      'Long Lasting Exterior Colors',
      'Washable & Dirt-Resistant Surface'
    ],
    coverage: '12 - 14 m² / Litre / Coat',
    dryingTime: 'Touch Dry: 30 mins | Recoat: 3 - 4 hours',
    sheen: 'Soft Low Sheen Satin'
  },
  {
    id: 'royal-matt',
    name: 'ZIK Royal Matt',
    tagline: 'Interior Luxury Emulsion • Velvet Matt',
    category: 'interior',
    categoryName: 'Interior Paints',
    price: 4600,
    rating: 4.9,
    reviewsCount: 167,
    image: './assets/images/product-silk-touch.svg',
    badge: 'Designer Pick',
    badgeColor: '#0B2265',
    description: 'Crafted for discerning homeowners and architectural interiors who desire a glare-free, non-reflective velvety finish. Effectively masks subtle wall imperfections while bathing rooms in rich color.',
    sizes: [
      { size: '1 Litre (Quarter)', price: 1280 },
      { size: '4 Litres (Gallon)', price: 4600 },
      { size: '16 Litres (Drum)', price: 17400 }
    ],
    features: [
      'Zero-Glare Velvety Matt Texture',
      'Conceals Minor Wall Irregularities',
      'Enhanced Color Saturation',
      'Anti-Bacterial Silver Ion Shield',
      'Highly Breathable Film'
    ],
    coverage: '13 - 15 m² / Litre / Coat',
    dryingTime: 'Touch Dry: 25 mins | Recoat: 3 hours',
    sheen: 'Deep Velvet Matt'
  }
];
