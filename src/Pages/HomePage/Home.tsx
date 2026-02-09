import React from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';
import { Canvas } from '@react-three/fiber'
import Cube from '../Components/Cube'
import "../../Styles/Grid.css"
import '../../global-styles.css';

interface Props {}

const Home = (props: Props) => {
    //     <div className="App">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <Link to={`/folio`}>Link</Link>
    //         <p>
    //         Testing...
    //         </p>
    //     </header>
    //     </div>
    return(
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div>
                        <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <Cube position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                    <div>
                        <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <Cube position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                    <div>
                        <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <Cube position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                    <div>
                        <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <Cube position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home