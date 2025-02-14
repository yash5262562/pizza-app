import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import pizaLeft from "../assets/pizzaLeft.jpg"
import './Contact.css'

function Contact() {
  return (
    <div className='lefty'>
        
        <h2>Contact</h2>
        <img src={pizaLeft}></img>

        <div className='righty'>
        <i className="fa-solid fa-location-dot"></i>
        <h4>Infinity Mall,chinchokli bunder Malad west</h4>
        <i className="fa-solid fa-mobile"></i>
        <p>9820955691</p>

        <i className="fa-solid fa-location-dot"></i>
        <h4>Growels Mall,Kandivali east</h4>
        <i className="fa-solid fa-mobile"></i>
        <p>8888888934</p>

        <i className="fa-solid fa-location-dot"></i>
        <h4> Maxus Mall,Mira-Bhayander</h4>
        <i className="fa-solid fa-mobile"></i>
        <p>8888888931</p>

        <i className="fa-solid fa-location-dot"></i>
        <h4>Thakur Mall,Borivali east</h4>
        <i className="fa-solid fa-mobile"></i>
        <p>8884888930</p>

       
        






        </div>

        <div className='centre'>
        <form>
            <h3>For more details contact on:</h3>
            <input placeholder='Enter name'/>
            <input placeholder='Enter Email'/>
            <input placeholder='Contact'/>
            <button>send message</button>
        </form>





        </div>
       
      <Footer />

       
    </div>
  )
}

export default Contact
