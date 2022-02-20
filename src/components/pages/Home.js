import React from 'react';
import '../../styles/Home.css'
import profileImg from "../../images/profilepic.jpg"

export default function Home() {
  return (
    <div className="intro">
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='introduction'>👋  Hi, my name is </h2>
          <h1 className='intro-name'>Daniel Westiner</h1>
          {/* <h3>Full-Stack Web Developer with skills in:</h3> */}
          {/* <div className='intro-title-item1'>Full-Stack Web Developer with skills in:</div> */}
            <div className='intro-title'>
              <div className='intro-title-wrapper'>
                <div className='intro-title-item'>HTML</div>
                <div className='intro-title-item'>CSS</div>
                <div className='intro-title-item'>JavaScript</div>
                <div className='intro-title-item'>Node.js</div>
                <div className='intro-title-item'>Express</div>
                <div className='intro-title-item'>MySQL</div>
                <div className='intro-title-item'>MongoDB</div>
                <div className='intro-title-item'>React</div>
              </div>
            </div>
            <p className='intro-description'>I'm a Philadelphia-based full-stack web developer currently enrolled in UPenn's Coding Bootcamp.  I love learning about web development and creating projects.</p>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-bg'></div>
        <img className='profileImg' src={profileImg} alt=''></img>
      </div>
    </div>
  );
}
