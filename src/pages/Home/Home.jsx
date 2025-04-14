import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import OurHighlights from "../../components/OurHighlights/OurHighlights";
import RecommendedForYou from "../../components/RecommendedForYou/RecommendedForYou";
import TopBrands from "../../components/TopBrands/TopBrands";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TopBrands />
      <OurHighlights />
      <RecommendedForYou />
    </>
  );
};

export default Home;
