import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import Mission from '../Mission/Mission';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Mission></Mission>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;