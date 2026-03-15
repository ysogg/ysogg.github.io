import React, { useState } from 'react'
import logo from '../../logo.svg'; //<img src={logo} />
import { Link } from 'react-router';
import "../../Styles/Home.css"
import Carousel from "../Components/Carousel"
import ListDropdown from '../Components/ListDropdown';

const ListItems = [
  { id: 1, text: "Projects" },
  { id: 2, text: "Records" },
  { id: 3, text: "Parks On The Air" },
];

const Home = ({...props}) => {
    const [listActive, setListActive] = useState(null);
    
    const listClick = (id: any) => {
        setListActive( listActive == id ? null: id)
    }

    return(
    <div>
    <div className="shadow2"/>
    {/* <div className="home-inner"> */}
        <div className="logo">
            <Link to={`/`}>
                <img src={logo}/>
            </Link>
        </div>

        <div className="header">
            <h1>Alex Busch</h1>
            <p>Software Engineer - With a degree and everything!</p> {/* Finish description + clamp <p> width so we get nice text wrap*/}
            <p><a href="https://github.com/ysogg">Github</a> | <Link to={`/resume`}>Resume</Link> | <a href="https://www.linkedin.com/in/alex-busch-3649b5266/">LinkedIn</a> |  <a href="https://www.youtube.com/@alexbusch?sub_confirmation=1">Youtube</a></p>
        </div>

        <div className="headerLinks">
          <ul>
            {ListItems.map((item) => (
                <ListDropdown
                key={item.id}
                item={item}
                isActive={item.id === listActive}
                onClick={listClick}
                />
            ))}
          </ul>
        </div>
        {/* <Carousel>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg/250px-Red-eyed_Leaf_Frog_%2849661076226%29.jpg" alt="Slide 3" />
        </Carousel> */}
    {/* </div> */}

    {/* Push to bottom */}
    {/* <footer className="footerClass">Conact: <a href="mailto:oneof1000bugs.org">oneof@1000bugs.org</a></footer> */}
    </div>
    )
}

export default Home
