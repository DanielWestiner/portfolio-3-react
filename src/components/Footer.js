import React from 'react';
import '../styles/Footer.css'

export default function Footer () {
    return (
        <>
        <footer>
            <h5>Drop A Line...</h5>
            <a href="mailto:daniel.westiner@gmail.com" className="footer-link">daniel.westiner@gmail.com</a>
            <ul className="social-list">
                <li className="social-list-item"><a href="https://github.com/DanielWestiner" className="social-list-link">Github</a></li>
                <li className="social-list-item"><a href="https://www.linkedin.com/in/daniel-westiner/" className="social-list-link">LinkedIn</a></li>
                <li className="social-list-item"><a href="https://drive.google.com/file/d/1q_K0nXou99Rz_sE6qO967IRMuCxS2VyU/view?usp=sharing" className="social-list-link">My Resume</a></li>
                <li className="social-list-item"><a href="https://codepen.io/w-daniel" className="social-list-link">CodePen</a></li>
            </ul>
        </footer>
        </>
    )
}