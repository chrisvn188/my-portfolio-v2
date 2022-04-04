import HomeIcon from './assets/images/home-icon.svg';
import AboutIcon from './assets/images/user-icon.svg';
import ProjectsIcon from './assets/images/work-icon.svg';
import ContactIcon from './assets/images/contact-icon.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const menuList = [
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

export const socialLinks = [
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
