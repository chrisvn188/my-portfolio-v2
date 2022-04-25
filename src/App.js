import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { menuList, socialLinks } from './data/data'
import { createContext } from 'react'

export const MenuListContext = createContext()
export const SocialLinksContext = createContext()

const App = () => {
  return (
    <MenuListContext.Provider value={menuList}>
      <SocialLinksContext.Provider value={socialLinks}>
        <Header />
        <Home />
      </SocialLinksContext.Provider>
    </MenuListContext.Provider>
  )
}

export default App
