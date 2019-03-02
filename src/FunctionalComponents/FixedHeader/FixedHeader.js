import React from 'react';

import './FixedHeader.css';


    
const fixedHeader = (props) => (    
    <div className="fixed-header-container">
        <div className="fixed-header header-transition background-transition">
        <div className="fixed-header-item fixed-header-item-gradient">
            HOME
        </div>
        <div className="fixed-header-item fixed-header-item-gradient">
            PROJECTS
        </div>
        <div className="fixed-header-item fixed-header-item-gradient">
            EDUCATION
        </div>
        <div className="fixed-header-item fixed-header-item-gradient">
            INTERESTS
        </div>
        </div>
    </div>
)


export default fixedHeader;