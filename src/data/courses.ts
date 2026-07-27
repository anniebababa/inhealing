export interface Course {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  teachingUnit: string;
  method: string;
}

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: '【拿下國際芳療師證書】美國NAHA Level 1芳療師認證課｜線上學習＋國際證書，一年內隨時進修',
    author: 'inhealingtw',
    date: 'February 18, 2026',
    image: '/images/hero-banner.webp',
    slug: 'naha-level1',
    teachingUnit: '植覺療癒',
    method: 'Zoom直播或台北市政府教室',
  },
  {
    id: '2',
    title: '【你也能擁有法式專屬香氣】法國F.C.A.精油調香師入門課｜9小時帶你從芳療小白變斜槓高手',
    author: 'inhealingtw',
    date: 'February 18, 2026',
    image: '/images/product-daily-healing-set.png',
    slug: 'fca-perfumer',
    teachingUnit: '植覺療癒',
    method: 'Zoom直播',
  },
  {
    id: '3',
    title: '【翻轉信念・改變人生】希塔療癒師認證課｜線上直播＋國際證書，打開自癒力新人生',
    author: 'inhealingtw',
    date: 'February 6, 2026',
    image: '/images/course-training-3.jpg',
    slug: 'theta-healing',
    teachingUnit: '植覺療癒',
    method: 'Zoom線上直播課',
  },
];
