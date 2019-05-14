import React from 'react';

import './FixedHeader.css';


    
const fixedHeader = (props) => (    
    <div className="fixed-header-container">
        <div className="fixed-header header-transition background-transition">
            <div className="fixed-header-item fixed-header-item-gradient" onClick={() => props.scrollDoc(0, document.documentElement.scrollTop)}>
                HOME
            </div>
            <div className="fixed-header-item fixed-header-item-gradient" onClick={() => props.scrollDoc(575, document.documentElement.scrollTop)}>
                SUMMARY
            </div>
            <div className="fixed-header-item fixed-header-item-gradient" onClick={() => props.scrollDoc(1922, document.documentElement.scrollTop)}>
                PROJECTS
            </div>
            <div className="fixed-header-item fixed-header-item-gradient" onClick={() => props.scrollDoc(1350, document.documentElement.scrollTop)}>
                SKILLS
            </div>
           
        </div>
    </div>
)


export default fixedHeader;