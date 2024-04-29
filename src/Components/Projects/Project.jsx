import React from 'react'
import './Project.css'
import project1 from '../../Asserts/project-1.png'
import project2 from '../../Asserts/project-2.png'
import project3 from '../../Asserts/project-3.png'
import { FaGithub } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa6";


const Project = () => {
    return (
        <section id='Projects'>
            <div className="project-work">
                <h2 className='recentwork'>My Recent <strong>Work</strong> </h2>
                <span className='Description'>Here are few projects i work recently</span>
                <div className="hole-project">
                    <div className="one-one-project">
                        <img src={project1} alt="" className='projectimg' />
                        <h3 className='project-name'>E-Commerce</h3>
                        <span className='project-Desc'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages</span>
                        <div className="buttons">
                            <button className='github-btn'><FaGithub /> Git-Hub</button>
                            <button className='github-btn'><FaNotesMedical /> Demo</button>
                        </div>
                    </div>


                    {/* Project-2 */}
                    <div className="one-one-project">

                        <img src={project2} alt="" className='projectimg' />
                        <h3 className='project-name'>Blog-Managment</h3>
                        <span className='project-Desc'>Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM .</span>
                        <div className="buttons">
                            <button className='github-btn'><FaGithub /> Git-Hub</button>
                            <button className='github-btn'><FaNotesMedical /> Demo</button>
                        </div>
                    </div>

                    {/* project-3 */}
                    <div className="one-one-project">

                        <img src={project3} alt="" className='projectimg' />
                        <h3 className='project-name'>Portfolio</h3>
                        <span className='project-Desc'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages</span>
                        <div className="buttons">
                            <button className='github-btn'><FaGithub /> Git-Hub</button>
                            <button className='github-btn'><FaNotesMedical /> Demo</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project
