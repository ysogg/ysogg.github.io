import React from 'react'
import logo from '../../burger.gif';

interface Props {}

const HomePage = (props: Props) => {
    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Testing...
            </p>
        </header>
        </div>
    )
}

export default HomePage