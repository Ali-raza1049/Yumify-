import React from 'react';

import Card from "../../components/users/Card.jsx";
import About from "../../components/users/About.jsx";
import Menu from "../../components/users/Restaurants.jsx";
import Reservation from '../../components/users/Reservation.jsx';
import Team from '../../components/users/Team.jsx';
import Testimonials from '../../components/users/Testimonials.jsx';

import Hero from '../../components/users/Hero.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Card />   
      <About />
      <Menu />
      <Reservation />
      <Team />
      <Testimonials />
    </>
  );
}

export default Home;
