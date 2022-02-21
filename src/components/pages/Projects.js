import React from 'react';
import '../../styles/Projects.css'
import img1 from "../../images/project-img-1.jpg"
import img2 from "../../images/project-img-2.jpg"
import img3 from "../../images/project-img-3.jpg"
import img4 from "../../images/project-img-4.jpg"
import img5 from "../../images/project-img-5.jpg"
import img6 from "../../images/project-img-6.jpg"

export default function Projects() {
  return (
    <div className='projects'>
      <div>
        <h1 className='projects-intro'>A Collection of My Work</h1>
        <p>
          Here's a sampling of what I've been working on recently:
        </p>
      </div>
      <div className="container">
    <div className="row row1">
        <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img1} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>E-Commerce Back-End</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/ecommerce-back-end' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
        <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img2} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>README Generator</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/professional-readme-generator' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
        <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img3} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>TeamDex</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/teamdex' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
    </div>
    <div className="row row2">
    <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img4} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>Can I Watch It?</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/can-I-watch-it' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
        <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img5} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>PWA Text Editor</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/pwa-text-editor' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
        <div className="col-sm-4 card">
          <img className='card-img-top project-img' src={img6} alt=''></img>
          <div className='card-body'>
            <h5 className='card-title'>Social Network API</h5>
            <a className='card-link' href='https://github.com/DanielWestiner/social-network-api' target="_blank" rel="noreferrer">Take a Look!</a>
          </div>
        </div>
    </div>
    </div>
  </div>
  );
}
