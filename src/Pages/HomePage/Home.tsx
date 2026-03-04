import React, { useState } from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';


const Home = ({...props}) => {
    return(
    <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Link to={`/records`}>Records</Link>
            <p>

            </p>
        </header>
    </div>
    )
}

export default Home
