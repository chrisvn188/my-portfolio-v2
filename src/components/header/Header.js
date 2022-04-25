import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { SocialList } from '../SocialList/SocialList'

const Header = () => {
  return (
    <header className='flex justify-between py-8 px-6 items-center bg-brand lg:bg-brand-dark lg:fixed lg:w-[18rem] lg:h-screen lg:flex-col lg:z-10'>
      <Logo />
      <Navbar />
      <SocialList />
    </header>
  )
}

export default Header
