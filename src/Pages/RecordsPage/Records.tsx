import React, { useState } from 'react'
import logo from '../../burger.gif';
import { Link } from 'react-router';
import { Canvas } from '@react-three/fiber'
import { useForm } from "react-hook-form"
import Cube from '../Components/Cube'
import "../../Styles/Tiles.css"
import tags from '../../tags.json'

function importAllStories(r: any) {
    const files = [...new Set (  
      r.keys().map((key: any) => key.split('/')[1])
    )];
    return files;
  }
  
const albums = importAllStories(require.context('../../../public/records/img/', true, /\./));

const Records = ({...props}) => {
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

    function getKeysByStringValueTS<T extends Record<string, any>>(
      obj: T,
      targetString: string
    ): (keyof T)[] {
      return (Object.keys(obj) as (keyof T)[]).filter(key => {
        return obj[key].includes(targetString.toLowerCase());
    });
  }


    //Live searchbar
    const searchElement = watch("toSearch");
    var noSearch: boolean = true;
    if (searchElement == "" || searchElement == undefined) {
        noSearch = true;
    } else {
        noSearch = false;
    }
    var visibleTiles = [];
    if (searchElement == "" || searchElement == undefined) {
        visibleTiles = albums;
    } else {
        const tagged = getKeysByStringValueTS(tags, searchElement)
       
        visibleTiles = albums.filter((str: any) =>
                                      str.toLowerCase().includes(searchElement.toLowerCase()) ||
                                      tagged.includes(str)
                                    );
    }

    return(
        <div className="App">
            <header className="App-header">
                <form className="searchbar">
                        <input defaultValue="" {...register("toSearch")} />
                    </form>
                <div className="container">
                    {
                        visibleTiles.map((e: any) =>
                                         <Canvas>
                                          <ambientLight intensity={Math.PI / 2} />
                                          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                                          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                                          <Cube front={e + "/front.jpg"} back={e + "/back.jpg"} left={e + "/front.jpg"} right={e + "/front.jpg"}/>
                                          </Canvas>
                                        )
                    }
                </div>
            </header>
        </div>
    )
}

export default Records;
