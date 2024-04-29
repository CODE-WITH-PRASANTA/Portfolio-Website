import React from 'react'
import './Navbar.css'
import Logo from '../../Asserts/Logo.png'
import { Link } from 'react-scroll'
import contact from '../../Asserts/contact.png'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img src={Logo} alt="Logo" className='logo' />
            <div className="dexttop-menu">
                <Link className='DexttopMenuItem'>Home</Link>
                <Link className='DexttopMenuItem'>About</Link>
                <Link className='DexttopMenuItem'>Portfolio</Link>
                <Link className='DexttopMenuItem'>Projects</Link>
                <Link className='DexttopMenuItem'>Resume</Link>
            </div>
            <button className='dexttopMenuBtn'>
                <img src={contact} alt="" className='dexttopMenuImg' /> Contact Me </button>

        </nav>
    )
}

export default Navbar
