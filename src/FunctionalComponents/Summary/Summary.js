import React from 'react';    

import './Summary.css';

const summary = (props) => (
    <div className="summary">
        <p className="summary-header">WHO I AM<span>.</span></p>
        <hr className="summary-header-line"/>
        <div className="summary-paragraph">
        <p className="summary-paragraph-text">
            Hi there, I'm a relatively new programmer and I'm looking to enter the work force. I have been coding in some form or 
            fashion for about the last 4 years. Since I graduated from Auburn University's electrical engineering program in
            August of 2018, I have been focusing primarily on the MERN stack. But in the past I've also used Ruby on Rails and 
            flask. I built this website in order to make it as easy as possible to show employers that I do in fact know how to
            code moderately well. I deployed it in early March and as of now I only have 2048 as the projects I have done, but 
            that is going to change. I enjoy coding and would like to learn as much about it as I can. When possible I would like to 
            delve further into algorithms construction. When I'm not coding, my two biggest time-sinks are reading and working out. 
            I'm trying. 
        </p>
        </div>
    </div>
)

export default summary;