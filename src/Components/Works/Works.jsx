import React from 'react'
import './Works.css'
import Portfolio1 from '../../Asserts/portfolio-1.png'
import Portfolio2 from '../../Asserts/portfolio-2.png'
import Portfolio3 from '../../Asserts/portfolio-3.png'
import Portfolio4 from '../../Asserts/portfolio-4.png'
import Portfolio5 from '../../Asserts/portfolio-5.png'
import Portfolio6 from '../../Asserts/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='WorksTittle'>My Portfolio</h2>
            <span className='WorksDesc'>Front-end Devloper with six month of Internship experience Building Websites & Web Applications using React.js & Modern Javascript Tools/FrameWorks.Key achivement includes Collaborating witha a cross Function team to successful Lunch a Web Application , Resultin in 30% increase in convertion rates with the first quater of Deployment.</span>

            <div className="WorksImgs">
                <img src={Portfolio1} alt="" className='WorksImg' />
                <img src={Portfolio2} alt="" className='WorksImg' />
                <img src={Portfolio3} alt="" className='WorksImg' />
                <img src={Portfolio4} alt="" className='WorksImg' />
                <img src={Portfolio5} alt="" className='WorksImg' />
                <img src={Portfolio6} alt="" className='WorksImg' />
            </div>

            <button className='Worksbtn'>See more</button>
        </section>
    )
}

export default Works
