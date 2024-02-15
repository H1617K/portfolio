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
import ContactUs from './Conponent/ContactUs';
import { BlogContain } from './Page/BlogsPage/BlogContain';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Service/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Slider" element={<Slider/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/blog/top-trends-in-web-development' element={<BlogContain/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;