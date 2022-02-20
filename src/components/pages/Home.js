import React from 'react';
import '../../styles/Home.css'

export default function Home() {
  return (
    <div className="intro">
      <div className='intro-left'>left
        <div className='intro-left-wrapper'>
          <h2 className='introduction'>👋  Hi, my name is </h2>
          <h1 className='intro-name'>Daniel Westiner</h1>
          <div className='intro-title-item1'>Full-Stack Web Developer with skills in:</div>
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
        </div>
      </div>
      <div className='intro-right'>right</div>

    </div>
  );
}
