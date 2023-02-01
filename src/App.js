import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Distinations from './components/distinations';
import Select from './components/select';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Distinations/>
      <Select/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
