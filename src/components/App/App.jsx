import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Stats from "../Stats/Stats";
import Categories from "../Categories/Categories"
import Testimonials from "../Testimonials/Testimonials";
import Price from "../Price/Price";
import FAQ from "../Faq/Faq";
import Footer from "../Footer/Footer";
const App = () => {
    return ( <div>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Card/>
        <Categories/>
        <Testimonials/>
        <Price/>
        <FAQ/>
        <Footer/>
    </div> );
}
 
export default App;