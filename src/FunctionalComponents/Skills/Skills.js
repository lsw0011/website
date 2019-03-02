import React from 'react';

import './Skills.css';

const skills = (props) => (
    <div className="skills">
        <p className="skills-header">WHAT I KNOW<span>.</span></p>
        <div className="skills-languages">
        <p className="skills-languages-header">Programming Languages</p>
        <div>
            <p>Python</p>
        </div>
        <div>
            <p>Javascript</p>
        </div>
        <div>
            <p>Ruby</p>
        </div>
        <div>
            <p>C</p>
        </div>
        </div>
        <div className="skills-webdev">
            <p className="skills-webdev-header">Web Development</p>
            <div>
                <p>Nodejs</p>
            </div>
            <div>
                <p>Express</p>
            </div> 
            <div>
                <p>React</p>
            </div>
            <div>
                <p>CSS</p>
            </div>
            <div>
                <p>MongoDB</p>
            </div>
            <div>
                <p>SQL</p>
            </div>
        </div>
        <div className="skills-frameworks">
            <p className="skills-frameworks-header">Frameworks</p>
            <div>
                <p>Ruby on Rails</p>
            </div>
            <div>
                <p>Express</p>
            </div>
        </div>
    </div>
)

export default skills;