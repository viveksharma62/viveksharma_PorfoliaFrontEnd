import React from 'react'
import './About.css';
import MyPic from '../../assets/images/study.jpg';
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src={MyPic} alt='my images' className='img-fluid'></img>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
              <h1>About Me</h1>
              <p>
              👋 Hello! I'm Vivek Kumar. I am pursuing a B.Tech in Computer Engineering from Marwadi University, with a specialization in computer engineering. I have a keen interest in development as a beginner, and my long-term goal is to become a software engineer. My hobbies include coding, learning new technologies, and traveling.
              <br></br>
              <br></br>

              Academic Excellence: Throughout my academic journey, I've consistently demonstrated a strong dedication to learning and excelling in my studies.    
              My coursework in computer engineering has provided me with a solid foundation in front-end development.
              <br></br>
              <br></br>

              Let's connect! I'm always open to networking with professionals and fellow students who share similar interests. Feel free to reach out to 
               me here on LinkedIn or via Email at contact us
            
             
              </p>
            </div>
            
        </div>
      </div>
      </Jump>
    </>
  )

}
//06:02
export default About
