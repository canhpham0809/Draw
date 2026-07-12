import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Organizers from './components/Organizers';
import Timeline from './components/Timeline';
import Rules from './components/Rules';
import Preparation from './components/Preparation';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-secondary)]">
      <Header />
      
      <main>
        <Hero />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
          <About />
          <Teams />
          <Organizers />
          <Timeline />
          
          <div className="grid md:grid-cols-2 gap-12">
            <Rules />
            <Preparation />
          </div>
          
          <Awards />
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
