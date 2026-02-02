import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import Mission from '../Mission/Mission';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      <Helmet>
  <title>Career Hub | Home</title>
</Helmet>
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