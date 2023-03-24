import React from 'react'
import './Intro.css';
import Github from '../../Image/github.png';
import Instagram from '../../Image/instagram.png';
import Linkedin from '../../Image/linkedin.png';
import Medium from '../../Image/medium.png';
import Vector1 from "../../Image/Vector1.png";
import Vector2 from "../../Image/Vector2.png";
import Boy from "../../Image/boy.png";
import Glassesemoji from "../../Image/glassesemoji.png";
import Thumbup from "../../Image/thumbup.png";
import Crown from "../../Image/crown.png";
import FloatingCard from '../FloatingCard/FloatingCard';


const Intro = () => {
    return (
        <div className="intro">
            <div className="iLeft">
                <div className="iName">
                    <span>Hi! I am </span>
                    <span>Venska Arman </span>
                    <span>Full-stack developer experienced in developing and producing high quality web applications</span>
                </div>
                <button className="button iButton">Hire Me</button>
                <div className="iIcons">
                    <a href='https://github.com/armanvanr/' target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/venska-arman-nur-rosyidin/' target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href='https://www.instagram.com/venskaarman/' target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href='https://medium.com/@armanvenska/' target="_blank" rel="noopener noreferrer">
                        <img src={Medium} alt="" />
                    </a>
                </div>
            </div>
            <div className="iRight">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <img src={Glassesemoji} alt="" />
                <div style={{ top: '26%', left: '80%' }}>
                    <FloatingCard image={Crown} text1="Web" text2="Developer" />
                </div>
                <div style={{ top: '79%', left: '50%' }}>
                    <FloatingCard image={Thumbup} text1="Best Design" text2="Award" />
                </div>
                <div className="blur blur1" ></div>
                <div className="blur blur2" ></div>
            </div>
        </div>
    )
}

export default Intro