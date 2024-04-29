import React from 'react'
import './Skills.css'
import uiDeisgn from '../../Asserts/ui-design.png'
import webDeisign from '../../Asserts/website-design.png'
import appDeign from '../../Asserts/app-design.png'

const Skills = () => {
    return (
        <section id='Skills'>
            <span className="SkillTittlle">
                What I do ?
            </span>

            <span className="skillDesc">
                I'm Skilled and Passinated as a Web-Designer with the six month experience with Front-End designer in the library of React.js , & also have Experienced in Html5 , Css , Tailwind-Css , Javascript , BootStrap-FrameWork , Also in GitHub AI-powered developer platform .
            </span>


            <div className="SkillBars">
                <div className="SkillBar">
                    <img src={webDeisign} alt="webdesign" className='SkillBarImage' />
                    <div className="SkillBarText">
                        <h2>Web-Devloper</h2>
                        <p>A Passinate Computer Science in B.Tech , with six month Experience of Web-Design Carrier also having the six Month Experience Internship Certificate..</p>
                    </div>
                </div>
            </div>

            <div className="SkillBars">
                <div className="SkillBar">
                    <img src={uiDeisgn} alt="uideign" className='SkillBarImage' />
                    <div className="SkillBarText">
                        <h2>React.js Devloper</h2>
                        <p>With Profession i studied in Reactjs and many library & Frame-Works. Working in many Reactjs Projects Like E-Commerce & Blogging and many other.</p>
                    </div>
                </div>
            </div>

            <div className="SkillBars">
                <div className="SkillBar">
                    <img src={appDeign} alt="appdeign" className='SkillBarImage' />
                    <div className="SkillBarText">
                        <h2>Frameworks</h2>
                        <p>By Profession Of React-Devloper i also Passinate with Html5 , Css , Tailwind-Css , Jvascript , BootStrap , Adobe-Photoshop , Canva-Color & GitHub</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
