import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../Asserts/Logo.png'
import { Link } from 'react-scroll'
import contact from '../../Asserts/contact.png'
import Menu from '../../Asserts/menu.png'

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    return (
        <nav className='Navbar'>
            <img src={Logo} alt="Logo" className='logo' />
            <div className="dexttop-menu">
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='DexttopMenuItem'>Home</Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={300} className='DexttopMenuItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={300} className='DexttopMenuItem'>Portfolio</Link>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='DexttopMenuItem'>Projects</Link>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='DexttopMenuItem'>Resume</Link>
            </div>
            <button className='dexttopMenuBtn' onClick={() => {
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', duration: 800 });
            }}>
                <img src={contact} alt="" className='dexttopMenuImg' />
                Contact Me
            </button>



            <img src={Menu} alt="menu" className='mobmenu' onClick={() => {
                setshowMenu(!showMenu)
            }} />
            <div className="navmenu" style={{ display: showMenu ? 'flex' : 'none' }} >
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='ListItem' onClick={() => {
                    setshowMenu(false)
                }}>Home</Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={300} className='ListItem' onClick={() => {
                    setshowMenu(false)
                }}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={300} className='ListItem' onClick={() => {
                    setshowMenu(false)
                }}>Portfolio</Link>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='ListItem' onClick={() => {
                    setshowMenu(false)
                }}>Projects</Link>
                <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={300} className='ListItem' onClick={() => {
                    setshowMenu(false)
                }}>Contact</Link>
            </div>


        </nav >
    )
}

export default Navbar
