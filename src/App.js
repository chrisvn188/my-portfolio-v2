import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { menuList, socialLinks } from './data/data'

const App = () => {
  return (
    <div className='App'>
      <Header menuList={menuList} socialLinks={socialLinks} />
      <Home />
    </div>
  )
}

export default App
