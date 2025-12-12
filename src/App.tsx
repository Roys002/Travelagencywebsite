import { Hero } from './components/Hero';
import { Packages } from './components/Packages';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
