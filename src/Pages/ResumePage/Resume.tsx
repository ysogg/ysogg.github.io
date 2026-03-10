import React, { useState } from 'react'
import logo from '../../logo.svg'; //<img src={logo} />
import { Link } from 'react-router';
import "../../Styles/Home.css"


const Resume = ({...props}) => {
    return(
    <div>
        <div className="shadow2"/>
        <div className="home-inner">
            <div className="logo">
                <img src={logo}/>
            </div>
            <iframe src={process.env.PUBLIC_URL + "Alex_Busch_Resume.pdf#page=1&zoom=100"} width="99%" height="99%" style={{minHeight: "98vh", border: "none"}}></iframe>
        </div>
    </div>
    )
}

export default Resume
