import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Menu from "./Menu"
import Contact from "./Contact"
import pizza from "../assets/pizza.jpeg"
import About from "./About"


function Home() {
  return (
    <div>
        <Navbar />
        <img src={pizza}></img>



        <Footer />
        

      
    </div>
  )
}

export default Home
