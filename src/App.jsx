import { useEffect } from "react"
import AppStore from "./components/AppStore/AppStore"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"
import "aos/dist/aos.css"
import Aos from "aos"
function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
    })
    Aos.refresh()
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
