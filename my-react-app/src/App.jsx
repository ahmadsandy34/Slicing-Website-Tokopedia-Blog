import React from "react"
import Navbar from "./components/Navbar"
import NavbarMain from "./components/NavbarMain"
import CardFour from "./components/CardFour"
import CardThreeContainer from "./container/CardThreeContainer"
import Footer from "./components/Footer"
import GoToTopButton from "./components/GoToTopButton"

function App() {
  return (
    <div>
      <Navbar />
      <NavbarMain />
      <CardFour />
      <CardThreeContainer />
      <Footer />
      <GoToTopButton />
    </div>
  )
}

export default App
