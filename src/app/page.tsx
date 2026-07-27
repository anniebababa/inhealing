import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AchievementSection from '@/components/AchievementSection';
import HealingSection from '@/components/HealingSection';
import CorporateSection from '@/components/CorporateSection';
import KateSection from '@/components/KateSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AchievementSection />
        <HealingSection />
        <CorporateSection />
        <KateSection />
        <ActivitiesSection />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
