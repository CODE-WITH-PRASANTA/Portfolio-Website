import React from 'react'
import './Contact.css'
import Walmart from '../../Asserts/walmart.png'
import Microsoft from '../../Asserts/microsoft.png'
import Adobe from '../../Asserts/adobe.png'
import Facebook from '../../Asserts/facebook.png'
import Facebookicon from '../../Asserts/facebook-icon.png'
import Twitter from '../../Asserts/twitter.png'
import Youtube from '../../Asserts/youtube.png'
import instagram from '../../Asserts/instagram.png'

const Contact = () => {
    return (
        <section id='Contactpage'>
            <div id="clients">
                <h1 className='ContactPageTittle'>My Clients</h1>
                <p className='ClientsDesc'>I have had opertunity to work with a diverse group of companies.
                    Some of the notable companies i have worked with includes.
                </p>
                <div className="clientimgs">
                    <img src={Walmart} alt="Clients" className='clientimg' />
                    <img src={Microsoft} alt="Clients" className='clientimg' />
                    <img src={Adobe} alt="Clients" className='clientimg' />
                    <img src={Facebook} alt="Clients" className='clientimg' />
                </div>
            </div>
            <div id="Contact">
                <h1 className='ContactPageTittle'>Contact me</h1>
                <span className='ContactDesc'>Plaease fill out the form below to discuss any work opertunities.</span>

                <form className='ConatctForm'>
                    <input type="text" placeholder='Your name' className='name' />

                    <input type="email" placeholder='Your email' className='email' />

                    <textarea name="message" cols="30" rows="5" placeholder='Your message' className='msg'></textarea>

                    <button className='submitbtn' type='submit' value='Send'>Submit</button>

                    <div className="links">
                        <img src={Facebookicon} alt="facebook" className='link' />
                        <img src={Twitter} alt="twitter" className='link' />
                        <img src={Youtube} alt="youtube" className='link' />
                        <img src={instagram} alt="insta" className='link' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
