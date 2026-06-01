import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Categories from "../components/Home/Categories";
import Testimonials from "../components/Home/Testimonials";
import Price from "../components/Home/Price";
import FAQ from "../components/Home/Faq";
import Card from "../components/Home/Card";
const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Card />
      <Categories />
      <Testimonials />
      <Price />
      <FAQ />
    </div>
  );
};

export default Home;
