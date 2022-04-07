import HomeIcon from './assets/images/home-icon.svg';
import AboutIcon from './assets/images/user-icon.svg';
import ProjectsIcon from './assets/images/work-icon.svg';
import ContactIcon from './assets/images/contact-icon.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import SoccerImg from './assets/images/playing-soccer.png';
import ReadingImg from './assets/images/reading.png';
import DeliveryImg from './assets/images/delivering-food.png';
import SingingImg from './assets/images/singing.png';
import PorfolioImg from './assets/images/project-portfolio.png';

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

export const activities = [
  {
    name: 'soccer',
    imgSrc: SoccerImg,
    altText: 'I play soccer',
  },
  {
    name: 'reading',
    imgSrc: ReadingImg,
    altText: 'I read books',
  },
  {
    name: 'delivering',
    imgSrc: DeliveryImg,
    altText: 'I deliver food',
  },
  {
    name: 'singing',
    imgSrc: SingingImg,
    altText: "I'm singing",
  },
];

export const projectList = [
  {
    title: 'My portfolio website',
    imgSrc: PorfolioImg,
    description:
      'My portfolio website is the first website I build using React and TailwindCss. Although, there are still some bugs and missing features, I had a ton of fun and learned a lot.',
    github: 'https://github.com/chrisvn188/my-portfolio-v2',
    live: 'https://chrisbui-personal.netlify.app/',
  },
  {
    title: 'Placeholder project',
    imgSrc: PorfolioImg,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ratione ipsum temporibus veritatis dolores ab quod voluptas vitae molestiae earum!',
    github: 'https://github.com/chrisvn188/my-portfolio-v2',
    live: 'https://chrisbui-personal.netlify.app/',
  },
  {
    title: 'Placeholder project',
    imgSrc: PorfolioImg,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ratione ipsum temporibus veritatis dolores ab quod voluptas vitae molestiae earum!',
    github: 'https://github.com/chrisvn188/my-portfolio-v2',
    live: 'https://chrisbui-personal.netlify.app/',
  },
];
