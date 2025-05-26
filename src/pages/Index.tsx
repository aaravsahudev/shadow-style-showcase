import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-mono">
      <Header />
      <Hero />
      <About />
      <Services />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;