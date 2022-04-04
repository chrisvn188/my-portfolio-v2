import React from 'react';
import FeaturedText from '../../components/shared/featuredText/FeaturedText';
import HeroImage from '../../assets/images/using-computer.svg';
import { styles } from '../../styles/styles';

const Home = () => {
  return (
    <section
      id='home'
      className={`${styles.section()} lg:grid place-items-center`}>
      <div className='lg:grid lg:auto-cols-auto lg:gap-14 lg:place-items-end sm:max-w-lg mx-auto md:max-w-xl lg:max-w-[50rem] max-w-md '>
        <div className='lg:col-span-1 lg:col-start-2 row-start-1 lg:text-left text-center space-y-3 lg:space-y-4'>
          <p className='text-md sm:text-lg lg:text-xl'>Hi there, I'm</p>
          <h1 className='text-4xl sm:text-5xl tracking-wider lg:text-5xl'>
            <FeaturedText>&lt;</FeaturedText>
            Chi Anh Bui
            <FeaturedText>&#47;&gt;</FeaturedText>
          </h1>
          <p className={styles.paragraph}>
            A front end web developer based in Toronto, Canada who loves making
            simple things with great visual effects.
          </p>
        </div>
        <div className='w-40 mx-auto mt-10 lg:w-52 lg:col-start-1 lg:col-span-1 row-start-1'>
          <img src={HeroImage} alt="Chris's portrait" />
        </div>
        <div className='flex gap-4 justify-center mt-10 items-center lg:mt-0 lg:col-start-2 justify-self-start'>
          <a
            className='bg-brand-violet px-5 py-2 md:px-6 md:py-3 rounded-full hover:-translate-y-1 transition-all inline-block text-md sm:text-lg lg:text-xl'
            href='#contact'>
            Let's talk
          </a>
          <a
            className='bg-brand-red px-4 py-2 md:px-6 md:py-3 rounded-full hover:-translate-y-1 transition-all inline-block text-md sm:text-lg lg:text-xl'
            href='#projects'>
            My projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
