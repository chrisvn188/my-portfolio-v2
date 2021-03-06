import { FaHome } from 'react-icons/fa'
import { BsPersonSquare } from 'react-icons/bs'
import { MdOutlineWork, MdEmail } from 'react-icons/md'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import SoccerImg from '../assets/images/playing-soccer.png'
import ReadingImg from '../assets/images/reading.png'
import DeliveryImg from '../assets/images/delivering-food.png'
import SingingImg from '../assets/images/singing.png'
import PorfolioImg from '../assets/images/project-portfolio.png'
import MemoryEggsImg from '../assets/images/memory-eggs.png'
import CountriesImg from '../assets/images/countries-api.png'
import MusicImg from '../assets/images/music-player.png'
import LoopStudio from '../assets/images/loop-studio.png'
import TipCalculator from '../assets/images/tip-calculator.png'

export const menuList = [
  {
    tab: 'home',
    path: '#hero',
    Icon: FaHome,
  },
  {
    tab: 'about',
    path: '#about',
    Icon: BsPersonSquare,
  },
  {
    tab: 'projects',
    path: '#projects',
    Icon: MdOutlineWork,
  },
  {
    tab: 'contact',
    path: '#contact',
    Icon: MdEmail,
  },
]

export const socialLinks = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100064472224104',
    icon: FaFacebook,
  },
  {
    name: 'github',
    url: 'https://github.com/chrisvn188',
    icon: FaGithub,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/chris-bui-vn188/',
    icon: FaLinkedin,
  },
]

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
]

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
    title: 'Countries App',
    imgSrc: CountriesImg,
    description:
      'Countries app is a great project challenged by Front End Mentor. Working on this project helped me strengthen my skills to handle with api.',
    github: 'https://github.com/chrisvn188/country-api-project',
    live: 'https://fa-country-api.netlify.app/',
  },
  {
    title: 'Memory eggs',
    imgSrc: MemoryEggsImg,
    description:
      "Memory eggs is another React project that I build for my nephews. It is a minigame that is good for brain, help them to remember things better. I'm so happy that they liked it and had lots of fun playing it.",
    github: 'https://github.com/chrisvn188/memory-eggs',
    live: 'https://memory-eggs-mini-game.netlify.app/',
  },
  {
    title: 'Tip calculator app',
    imgSrc: TipCalculator,
    description:
      "Tip calculator app is a good looking app from one of the Frontend Mentor challenges. It's a project that helps me learn how to validate form fields.",
    github: 'https://github.com/chrisvn188/tip-calculator-app',
    live: 'https://chrisvn188.github.io/tip-calculator-app/',
  },
  {
    title: 'Music Player',
    imgSrc: MusicImg,
    description:
      'As I love listening to music in my free time, I decided to make a simple music app that includes a list of my favourite Vietnamese songs. It was a fun project to practice my Javascript skill.',
    github: 'https://github.com/chrisvn188/music-player',
    live: 'https://chrisvn188.github.io/music-player/',
  },
  {
    title: 'Loop Studio Landing Page',
    imgSrc: LoopStudio,
    description:
      'Loop studio landing page is a project to test my responsive design skills.During time doing it, I realized that developing a website using mobile first approach is much more easier to scale up. ',
    github: 'https://github.com/chrisvn188/loopstudios-landing-page',
    live: 'https://chrisvn188.github.io/loopstudios-landing-page/',
  },
]
