import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Career } from './components/sections/Career';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <Career />
        <Skills />
        <Services />
        <div className="contact-footer-wrapper">
          <Contact />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}

export default App;
