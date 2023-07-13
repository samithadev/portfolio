import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
