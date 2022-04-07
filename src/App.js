import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import { menuList, socialLinks } from './data';

const App = () => {
  function handleShowNav(e) {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: document.getElementById(e.currentTarget.dataset.tab).offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div className='bg-brand text-slate-200'>
      <Header
        menuList={menuList}
        socialLinks={socialLinks}
        handleShowNav={handleShowNav}
      />
      <main className='lg:pl-[18rem]'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
