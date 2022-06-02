import React from 'react'
import About from "./About.css"
import Image from "../../media/uno.jpg"

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Dejame contarte</h3>
            <p>Todo lo que puedas imaginar para tu destreza en el ambito de la tecnologia
                Desde un monitor de juegos hasta audifonos electronicos para transportarte
                a otra realidad.
            </p>
        </div>
        <div className='about-img'>
            <img src={Image} alt='about' ></img>
        </div>

    </div>
  )
}

export default About