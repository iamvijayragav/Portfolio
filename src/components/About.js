import React from 'react'
import myImage from './images/myimage.jpg'
import './About.css'
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-1'>
                <img src={myImage} alt='Vijay' />
                </div>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Hardworking and passionate job seeker with strong organizational skills, eager to secure entry - level Software Development Engineer position. Organized and dependable candidate, successful at managing multiple priorities with a positive attitude.</p>
                    <p>I am Vijayaragavan, a Junior Software Developer with good programming Knowledge.</p>
                    <button className='button'><Link to='projects' spy={true} smooth={true} duration={500} offset={-100}>Explore more</Link></button>
                </div>
            </div>
        </div>
    )
}

export default About
