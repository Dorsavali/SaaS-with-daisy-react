import Navbar from "./components/Layout/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Layout/Footer";
const App = () => {
    return (     <>
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </>);
}
 
export default App;