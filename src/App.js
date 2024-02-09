import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './Conponent/Service';
import Navbar from './Conponent/Navbar';
import Product from './Conponent/Product';
import Slider from './Conponent/Slider';
import Blog from './Conponent/Blog';
import Testimonials from './Conponent/Testimoniral';
import FAQ from './Conponent/FAQ';
import AboutUs from './Conponent/AboutUs';
import { Footer } from './Conponent/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Service" element={<Service/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Slider" element={<Slider/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;