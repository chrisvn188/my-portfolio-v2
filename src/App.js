import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { styles } from './styles/styles';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
