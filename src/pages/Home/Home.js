import React from 'react';
import Banner from '../../components/Banner';
import About from '../About';
import Contact from '../Contact';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials';

const Home = () => {
  return <div className="max-w-[1440px] mx-auto">
    <Banner/>
    <Services/>
    <Pricing/>
    <About/>
    <Testimonials/>
    <Contact/>
  </div>;
};

export default Home;