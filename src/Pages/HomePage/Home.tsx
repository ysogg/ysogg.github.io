import React from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';
import '../../App.css';

interface Props {}

const Home = (props: Props) => {
    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={`/folio`}>Link</Link>
            <p>
            Testing...
            </p>
        </header>
        </div>
    )
}

export default Home