export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  slug: string;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: '晨曦‧綻 L\'Aube Fleurie No.29',
    originalPrice: 3280,
    salePrice: 2980,
    image: '/images/product-laube-thumb.jpeg',
    slug: 'laube-fleurie-no29',
  },
  {
    id: '2',
    name: '«香氛頻率» 嗅覺、腦波與調香師靈魂的能量共振',
    originalPrice: 420,
    salePrice: 330,
    image: '/images/course-training-2.jpg',
    slug: 'aroma-frequency-book',
  },
  {
    id: '3',
    name: '桔‧豐盛 香氛滾珠瓶(招財)',
    originalPrice: 2680,
    salePrice: 2380,
    image: '/images/hero-product.png',
    slug: 'tangerine-roller',
  },
  {
    id: '4',
    name: '日常療癒雙享組',
    originalPrice: 3960,
    salePrice: 2680,
    image: '/images/product-gift-box.png',
    slug: 'daily-healing-set',
  },
  {
    id: '5',
    name: '桔‧豐盛 擴香精油(招財) 10ml',
    originalPrice: 2280,
    salePrice: 1680,
    image: '/images/product-1.png',
    slug: 'tangerine-diffuser-oil',
  },
  {
    id: '6',
    name: '淨‧清新 法式香氛空間噴霧 50ml',
    originalPrice: 1280,
    salePrice: 880,
    image: '/images/product-5.png',
    slug: 'clean-fresh-spray',
  },
];
