import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../shared/logo/Logo';
import Navbar from '../navbar/Navbar';
import HomeIcon from '../../assets/images/home-icon.svg';
import AboutIcon from '../../assets/images/user-icon.svg';
import ProjectsIcon from '../../assets/images/work-icon.svg';
import ContactIcon from '../../assets/images/contact-icon.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const menuList = [
  {
    tab: 'home',
    path: '#home',
    icon: HomeIcon,
  },
  {
    tab: 'about',
    path: '#about',
    icon: AboutIcon,
  },
  {
    tab: 'projects',
    path: '#projects',
    icon: ProjectsIcon,
  },
  {
    tab: 'contact',
    path: '#contact',
    icon: ContactIcon,
  },
];

const socialLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com',
    icon: FaFacebook,
  },
  {
    name: 'twitter',
    url: 'https://www.twitter.com',
    icon: FaTwitter,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com',
    icon: FaLinkedin,
  },
  {
    name: 'github',
    url: 'https://www.github.com',
    icon: FaGithub,
  },
];

const Header = ({ showMobileNav, onMenuBtnClick }) => {
  return (
    <header className='flex justify-between py-8 px-6 items-center bg-brand-dark lg:fixed lg:w-[18rem] lg:h-screen lg:flex-col lg:z-10'>
      <Logo />

      <Navbar menuList={menuList} />

      <ul className='justify-center gap-4 hidden lg:flex'>
        {socialLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.url}
              target='_blank'
              rel='noreferrer'
              className='text-slate-100 w-[2rem] h-[2rem] flex items-center justify-center bg-brand-light rounded-full hover:-translate-y-2 transition-all hover:bg-brand-violet'>
              <link.icon />
            </a>
          </li>
        ))}
      </ul>

      {/* Menu Button */}
      <button
        className='text-2xl text-slate-50 lg:hidden'
        onClick={onMenuBtnClick}>
        {showMobileNav ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
