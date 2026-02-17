import React, { useState } from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';
import { Canvas } from '@react-three/fiber'
import { useForm } from "react-hook-form"
import Cube from '../Components/Cube'
import "../../Styles/Tiles.css"
import '../../global-styles.css';

//Switch this to JSON
//Also could be automated to grab all photos in a folder instead of specifying the textures for each side
//Side note, digitising the albums will take a minute so see how they look with phone first
const cover1: string[] = ["test", "test2"]
const cover2: string[] = ["abc", "elo", "car"]
const cover3: string[] = ["cat", "abc"]
const cover4: string[] = ["arc", "tree"]

const Home = ({...props}) => {
    //     <div className="App">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <Link to={`/folio`}>Link</Link>
    //         <p>
    //         Testing...
    //         </p>
    //     </header>
    //     </div>
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    //Live searchbar
    const searchElement = watch("toSearch");
    var noSearch: boolean = true;
    if (searchElement == "" || searchElement == undefined) {
        noSearch = true;
    } else {
        noSearch = false;
    }

    return(
        <div className="App">
            <header className="App-header">
                <form className="searchbar">
                        <input defaultValue="" {...register("toSearch")} />
                    </form>
                <div className="container">
                    {( noSearch || cover1.some(str => str.includes(searchElement.toLowerCase())) ) &&
                        <div>
                            <Canvas>
                            <ambientLight intensity={Math.PI / 2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                            <Cube front={"cat.png"} back={"h,m.png"} left={"cat.png"} right={"cat.png"}/>
                            </Canvas>
                        </div>
                    }
                    {( noSearch || cover2.some(str => str.includes(searchElement.toLowerCase())) ) &&
                        <div>
                            <Canvas>
                            <ambientLight intensity={Math.PI / 2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                            <Cube front={"cat.png"} back={"h,m.png"} left={"cat.png"} right={"cat.png"}/>
                            </Canvas>
                        </div>
                    }
                    {( noSearch || cover3.some(str => str.includes(searchElement.toLowerCase())) ) &&
                        <div>
                            <Canvas>
                            <ambientLight intensity={Math.PI / 2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                            <Cube front={"cat.png"} back={"h,m.png"} left={"cat.png"} right={"cat.png"}/>
                            </Canvas>
                        </div>
                    }
                    {( noSearch || cover4.some(str => str.includes(searchElement.toLowerCase())) ) &&
                        <div>
                            <Canvas>
                            <ambientLight intensity={Math.PI / 2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                            <Cube front={"/Discovery/front.jpg"} back={"/Discovery/back.jpg"} left={"cat.png"} right={"cat.png"}/>
                            </Canvas>
                        </div>
                    }
                </div>
            </header>
        </div>
    )
}

export default Home