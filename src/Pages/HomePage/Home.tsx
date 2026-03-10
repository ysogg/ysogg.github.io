import React, { useState } from 'react'
import logo from '../../logo.svg'; //<img src={logo} />
import { Link } from 'react-router';
import "../../Styles/Home.css"
import Carousel from "../Components/Carousel"


const Home = ({...props}) => {
    return(
    <div>
    <div className="shadow2"/>
    <div className="home-inner">
        {/*<Link to={`/records`}>Records</Link>*/}

        <div className="logo">
            <img src={logo}/>
        </div>

        <div className="header">
            <h1>Alex Busch</h1>
            <p>Software Engineer - With a degree and everything!</p>
            <p><a href="https://github.com/ysogg">Github</a> | <Link to={`/resume`}>Resume</Link> | <a href="https://www.linkedin.com/in/alex-busch-3649b5266/">LinkedIn</a> |  <a href="https://www.youtube.com/@alexbusch?sub_confirmation=1">Youtube</a></p>
        </div>

        <div className="headerLinks">
          <ul>
            <li><a>Pota</a></li>
            <li><a>Projects</a></li>
            <li><a>Records</a></li>
            
          </ul>
        </div>
        {/* <Carousel>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 3" />
        </Carousel> */}
    </div>
    </div>
    )
}

export default Home
