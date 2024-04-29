import React from 'react'
import './Intro.css'
import Bg from '../../Asserts/image.png'
import { Link } from 'react-scroll'
import btnimage from '../../Asserts/hireme.png'


const Intro = () => {
    return (
        <section id='Intro'>
            <div className="IntroContent">
                <span className='Hello'>Hello,</span>
                <span className='IntroText'>I'm <span className='Introname'>Prasanta</span> <br /> Frontend-Devloper</span>
                <p className='IntroPara'>I'm Skilled as a Frontend Devloper with experience of creating many friendly websites.</p>
                <Link><button className='btn'><img src={btnimage} alt="" className='btnimg' /><p>Hire me</p></button></Link>
            </div>
            <img src={Bg} alt="Profile" className='Bg' />
        </section>
    )
}

export default Intro
