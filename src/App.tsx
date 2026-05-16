import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Services } from './sections/Services/Services';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;