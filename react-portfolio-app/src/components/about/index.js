import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I have just completed a full-stack coding bootcamp run through Columbia University Engineering.  I am 
                very excited to learn from industry professionals and expand my knowledge base.
              </p>
              <p align="LEFT">
                I have worked in the restaurant industry for the last 7 years and have been a chef, managing my own team, for the last 2.
                I am no stranger to fast-paced learning and needing to adapt to an ever changing day.
                I work best in a team, but I can take on tasks alone if necessary.
                I'm not the most confident, but I am naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              <p>
                If I needed to define myself in one sentence that would be a kind person with
                a friendliness born from my southern upbringing, a love of sailing, my family, and a
                hunger to be a part of developing new and exciting technologies.
              </p>
            </div>
    
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
          <Loader type="pacman" />
        </>
      )
    }
    
    export default About