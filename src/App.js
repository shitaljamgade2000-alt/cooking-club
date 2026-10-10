import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import EventsSection from './components/EventsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <WhatWeDo />
      <EventsSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
