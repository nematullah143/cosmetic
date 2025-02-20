import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CarouselDefault from './components/Carousel';
import ShoppingCard from './components/ProductCard';
import ShoppingCarousel from './components/TopSelling';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <CarouselDefault /> */}
      <ShoppingCarousel/>
      <ShoppingCard />
      <Footer />
    </>
  )
}

export default App
