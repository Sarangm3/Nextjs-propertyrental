import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperty from '@/components/HomeProperty';
import FeatureProperties from '@/components/FeatureProperties';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeatureProperties />
      <HomeProperty />
    </>
  );
};

export default HomePage;
