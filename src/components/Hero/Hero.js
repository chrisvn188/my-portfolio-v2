import { useRef, useEffect } from 'react'
import { styles } from '../../styles/styles'
import { Link } from '../Link/Link'
import HeroImage from '../../assets/images/using-computer.svg'
import resumePdf from '../../assets/pdf/resume.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

const Hero = () => {
  const imgRef = useRef(null)

  const handleMouseMove = e => {
    const movingValue = imgRef.current.dataset.value
    const x = (e.clientX * movingValue) / 250
    const y = (e.clientY * movingValue) / 250
    imgRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id='hero'
      className={`${styles.section('bg-brand')} lg:grid place-items-center`}>
      <div className='lg:grid lg:auto-cols-auto lg:gap-12 lg:place-items-end sm:max-w-lg mx-auto md:max-w-xl lg:max-w-[50rem] max-w-md '>
        <div className='lg:col-span-1 lg:col-start-2 row-start-1 lg:text-left text-center space-y-3 lg:space-y-4'>
          <p>Hi there, I'm</p>
          <h1>
            <span className='text-brand-red'>&lt;</span> Chi Anh Bui{' '}
            <span className='text-brand-red'>&#47;&gt;</span>
          </h1>
          <p>
            A front end web developer based in Toronto, Canada who loves making
            simple things with great visual effects.
          </p>
        </div>
        <div className='w-40 mx-auto mt-10 lg:w-52 lg:col-start-1 lg:col-span-1 row-start-1'>
          <img
            src={HeroImage}
            alt="Chris's portrait"
            data-value='5'
            ref={imgRef}
          />
        </div>
        <div className='flex gap-4 justify-center mt-10 items-center lg:mt-0 lg:col-start-2 justify-self-start'>
          <Link color='violet' href={resumePdf} download>
            <AiOutlineDownload />
            <span>Resume</span>
          </Link>
          <Link color='red' href='#projects'>
            My projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
