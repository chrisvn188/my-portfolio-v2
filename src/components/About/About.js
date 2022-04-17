import { useState } from 'react'
import { styles } from '../../styles/styles'
import { activities } from '../../data/data'
import PlayingSportImg from '../../assets/images/playing-sport.svg'
import Activities from '../Activities/Activities'

const About = () => {
  const [bigAboutImage, setBigAboutImage] = useState(PlayingSportImg)

  function handleClickOnActivityCard(e) {
    const imgSrc = e.currentTarget.querySelector('img').src
    setBigAboutImage(imgSrc)
  }

  return (
    <section id='about' className={styles.section('bg-brand')}>
      <div className='space-y-20'>
        <h2>About me</h2>
        <div className='md:grid md:grid-cols-3 md:gap-y-20 md:gap-x-10'>
          <p className={`${styles.paragraph} col-span-2`}>
            Hi, Nice to meet you! I'm Chi or you can call me Chris. I graduated
            Computer Programming Analyst from George Brown College, Toronto a
            year ago. Since then I have been teaching myself how to make
            websites with three core technologies HTML, CSS, and JavaScript.
            Currently, I'm looking for any oppotunities to work as a
            professional web developer.
          </p>
          <img
            src={bigAboutImage}
            alt="I'm playing sport"
            className='max-w-[14rem] col-span-1 row-span-2 self-center justify-self-center hidden md:block'
          />
          <div className='col-span-2'>
            <h3 className='mt-20 md:mt-0'>What I do when I don't code</h3>
            <ul className='flex flex-wrap gap-x-6 gap-y-12 gap-6 mt-10 justify-center md:justify-start'>
              {activities.map(activity => (
                <li className='text-center' key={activity.name}>
                  <Activities
                    handleClickOnActivityCard={handleClickOnActivityCard}
                    activity={activity}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
