import React, { useState } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MobileNavbar from './components/mobileNavbar/MobileNavbar';
import { styles } from './styles/styles';
import { menuList, socialLinks } from './data';

const App = () => {
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);

  function handleShowNav(e) {
    if (e.currentTarget.nodeName.toLowerCase() === 'a') {
      e.preventDefault();
      window.scrollTo({
        left: 0,
        top: document.getElementById(e.currentTarget.dataset.tab).offsetTop,
        behavior: 'smooth',
      });
      setIsMobileNavShown(prevState => !prevState);
    } else {
      setIsMobileNavShown(prevState => !prevState);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header
        menuList={menuList}
        socialLinks={socialLinks}
        handleShowNav={handleShowNav}
      />

      {isMobileNavShown && (
        <MobileNavbar
          menuList={menuList}
          handleShowNav={handleShowNav}
          isMobileNavShown={isMobileNavShown}
        />
      )}

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
