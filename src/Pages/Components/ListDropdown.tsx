import React, { useState, FC, useRef } from 'react'
import "../../Styles/Home.css"
import fingerGif from "../../Assets/finger.gif"

interface ListProps {
  item: any;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ListDropdown: FC<ListProps> = ({ item, isActive, onClick}) => {
    const scrollRef = useRef<null | HTMLDivElement>(null);

    const listClass =  isActive ? 'listElement listElementSelected' : 'listElement'
    const layerClass = isActive ? 'hiddenLayerSelected' : 'hiddenLayer'

    // confirm works as expected once page longer
    if (isActive) {
        if (scrollRef.current != null)
            scrollRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
        })
    }

    return(
    <div ref={scrollRef}>
        <a className={listClass} onClick={() => onClick(item.id)}>{item.text}</a>
        <div className={layerClass}> 
            {/* Projects variant */}
            {isActive && item.id == 1 &&
                <div className={layerClass}>
                    <p>Test</p>
                    <div className={"viewAll"}>
                        <img src={fingerGif}></img>
                        <a href="https://github.com/ysogg">View More</a>
                        <img src={fingerGif}></img>
                    </div>
                </div>
            }

            {/* Records variant */}
            {isActive && item.id == 2 &&
                <div className={layerClass}>
                    <p>Records</p>
                </div>
            }

            {/* POTA variant */}
            {isActive && item.id == 3 &&
                <div className={layerClass}>
                    <p>POTA</p>
                </div>
            }
        </div>
    </div>
    )
}

export default ListDropdown
