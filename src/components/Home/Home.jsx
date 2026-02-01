import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import Mission from '../Mission/Mission';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Mission></Mission>
        <Services></Services>
        <WhyChooseUs></WhyChooseUs>
      </div>
    </div>
  );
};

export default Home;