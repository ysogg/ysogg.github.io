import React, { useState, FC, useRef } from 'react'
import "../../Styles/Home.css"
import fingerGif from "../../Assets/finger.gif"
import Pcannon from "../../Assets/Pcannon.png"
import handDrone from "../../Assets/handDrone.png"
import phoneMic from "../../Assets/phoneMic.png"

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
                    
                    <div className="dropdownCenter">
                        <div style={{paddingBottom:15}}>
                            <div className="dropdownTitle">
                                <p>Potato Cannon</p>
                                <hr/>
                            </div>
                            <div style={{float:'left'}}>
                                <a href="https://youtu.be/-WQyWJ_fUdI" style={{padding:25}}><img className="thumbnails"  src={Pcannon}></img></a>
                            </div>
                            <p>Custom pressurized air potato cannon made from a tire seater with a schedule 80 PVC pipe barrel. Shout out Alex King who I worked on this together with. Check out the <a style={{padding:0}} href="https://youtu.be/-WQyWJ_fUdI">video</a> were we blow up snowmen!</p>
                        </div>
                        <br/>

                        <div style={{paddingBottom:15}}>
                            <div className="dropdownTitle">
                                <p>Hand-Drone</p>
                                <hr/>
                            </div>
                            <div style={{float:'right'}}>
                                <a href="https://youtu.be/4xP1m9DKpt8" style={{padding:25}}><img className="thumbnails"  src={handDrone}></img></a>
                            </div>
                            <p>Control system for the Parrot AR Drone 2.0 platform using a Leap Motion hand-tracking camera. Honestly don't have much to say about this one lol. This was one of my earlier projects so it's not too complicated. Check out the repo <a style={{padding:0}} href="https://github.com/ysogg/HandDrone">here</a>!</p>
                        </div>
                        <br/>
                        
                        <div style={{paddingBottom:15}}>
                            <div className="dropdownTitle">
                                <p>Rotary Handset Microphones</p>
                                <hr/>
                            </div>
                            <div style={{float:'left'}}>
                                <a href="https://youtu.be/8bkv7GrJi5g" style={{padding:25}}><img className="thumbnails"  src={phoneMic}></img></a>
                            </div>
                            <p>One of the easiest and coolest projects I've done for my PC setup. Super easy hardware mod for old handsets that lets you use them as regular microphones. Since this video I've made a second sleeker one with a quarter inch jack instead of an XLR which is now a dedicated secondary input in my audio interface.</p>
                        </div>
                        <br/>

                        <div style={{paddingBottom:0}}>
                            <div className="dropdownTitle">
                                <p>POTA Stats Tracker</p>
                                <hr/>
                            </div>

                            <img src="https://pota-stats-tracker.vercel.app/api?callsign=VA3HII" />
                            <p>
                                Based on Anurag Hazra's GitHub README Stats project the POTA stats tracker is an embeddable svg that displays your top POTA stats with a wide variety of customization options. For more info check out the repo on <a style={{padding:0}} href="https://github.com/ysogg/pota-stats-tracker">GitHub</a>.
                            </p>
                        </div>
                        <br/>

                        <div className={"viewAll"}>
                            <img src={fingerGif}></img>
                            <a href="https://github.com/ysogg">View More</a>
                            <img src={fingerGif}></img>
                        </div>
                    </div>
                </div>
            }

            {/* Cameras variant */}
            {isActive && item.id == 2 &&
                <div className={layerClass}>
                    <p>Cameras</p>
                </div>
            }

            {/* Records variant */}
            {isActive && item.id == 3 &&
                <div className={layerClass}>
                    <p>Records</p>
                </div>
            }

            {/* POTA variant */}
            {isActive && item.id == 4 &&
                <div className={layerClass}>
                    <div className="dropdownCenter">
                        <div className="dropdownTitle">
                            <p>POTA</p>
                            <hr/>
                        </div>

                        
                        <p>
                        Parks On The Air (POTA) is an activity that licensed amateur radio operators can participate in either as an "activator" or "hunter". Activators set up their equipment and broadcast from any park registered in the POTA <a style={{padding:0}} href="https://pota.app/#/map">park map</a>.
                        Activators must make a minimum of 10 verified contacts before the activation is considered successful. Hunters play the opposite role, instead calling in to activators to make contact.
                        </p>

                        <p>
                            This is such an incredibly fun hobby and for how easy it is to get an amateur radio license I'd highly recommend it. Check out my POTA stats tracker too!
                        </p>
                        <div className={"viewAll"}>
                            <img src={fingerGif}></img>
                            <a href="https://pota.app/#/profile/VA3HII">POTA Page</a>
                            <img src={fingerGif}></img>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
    )
}

export default ListDropdown
