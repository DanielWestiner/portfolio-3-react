import React from 'react';
import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className='res-page container'>
      <div className='row res-area'>
        <div className='col-sm-6 res-skills'>
          <h2 className='res-intro'>A Little About Myself</h2>
          <div className='row'>
            <p className='res-intro col'>
              A Philadelphia-based full-stack web developer with skills in:
            </p>
            <ul className='res-intro'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className='col-sm-6 res-link'>
          <div className='col text-center res-info'>
            <h5>Take a peek at my resume here:</h5>
            <a href='https://drive.google.com/file/d/1q_K0nXou99Rz_sE6qO967IRMuCxS2VyU/view?usp=sharing' className='btn btn-light res-btn'> My Resume</a>
          </div>
        </div>
      </div>


      <div className='res-intro-bg col-sm-12 offset-sm-12'>

      </div>
    </div>
  );
}
