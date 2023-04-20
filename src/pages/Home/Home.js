import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Pricing from '../Pricing';
import Services from '../Services';
import Team from '../Team';
import Banner from './Banner';

const Home = () => {
  return <div className="max-w-[1440px] mx-auto">
    <Banner/>
    <Services/>
    <Pricing/>
    <Team/>
    <About/>
    <Contact/>
  </div>;
};

export default Home;