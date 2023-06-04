import Header from "./components/Header"
import BannerSection from "./components/BannerSection"
import AboutMeSection from "./components/AboutMe"
import TechSection from "./components/TechSection/index.module"
import ProjectSection from "./components/ProjectSection/index.module"
import Footer from "./components/Footer"


import './style/reset.css'

function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
