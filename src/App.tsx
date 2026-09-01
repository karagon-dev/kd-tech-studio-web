import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#main" className="skip-link">
        {t('skip')}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
