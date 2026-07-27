export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: '調香體驗課',
    description: '以氣味描繪靈魂，調出專屬獨特香氣',
    image: '/images/hero-banner-2.jpeg',
    cta: '了解更多',
    slug: 'perfume-workshop',
  },
  {
    id: '2',
    title: '專業證照課程',
    description: '從自我察覺到專業斜槓\n用香氣與療癒開啟你的下一段旅程',
    image: '/images/course-training-1.jpeg',
    cta: '了解更多',
    slug: 'professional-course',
  },
  {
    id: '3',
    title: '企業調香活動',
    description: '以天然香氣為媒介，打造專屬於企業團隊的療癒、凝聚與品牌記憶。',
    image: '/images/product-orange-diffuser.png',
    cta: '了解更多',
    slug: 'corporate-event',
  },
  {
    id: '4',
    title: '企業調香講座',
    description: '為客戶或員工來場有質感的法式調香\n讓香氣展開與自己對話的療癒時光',
    image: '/images/course-training-4.jpg',
    cta: '了解更多',
    slug: 'corporate-lecture',
  },
];
