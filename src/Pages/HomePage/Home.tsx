import React, { useState } from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';
import "../../Styles/Home.css"
import Carousel from "../Components/Carousel"


const Home = ({...props}) => {
    return(
   
    <div className="home-inner">
    {/*<div className="shadow"/>*/}
    <div className="shadow2"/>
    {/*<header className=""> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/*<Link to={`/records`}>Records</Link>*/}
            {/*</header>*/}
        <h1>HEADER</h1> {/*1000bugs.org*/}
        {/*sub-header with links to gh, linkedin, resume, etc*/}
        <div className="headerLinks">
          <ul>
            <li>HEADER</li>
            <li>ONE</li>
            <li className="listLink">TWO</li>
          </ul>
        </div>
        <Carousel>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 3" />
        </Carousel>
    </div>
    )
}

export default Home
