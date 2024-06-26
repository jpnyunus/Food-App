import './App.css'
import Category from './Components/Category'
import Food from './Components/Food'
import HeadlineCards from './Components/HeadlineCards'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </>
  )
}

export default App
