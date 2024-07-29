import React from "react"
import profile from "../assets/profile-pic.png"
import Typewriter from 'typewriter-effect';
// import { NavLink ,Link} from "react-router-dom";

export default function Home(){
    return (
        <div className="w-full h-full flex flex-col gap-5 ">
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-9 w-full md:my-3 my-[8vh] ">
                <div className="w-full flex gap-2 items-center justify-center flex-col   p-1 my-auto">
                    <h2 className="text-2xl sm:text-3xl text-purple-500 font-bold">Krishna Mahto</h2>
                    <div className="p-1 font-semibold md:text-lg text-sm text-center">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('I am a Front End Develover .')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("I am a Java coder .")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("I am Learning Full-Stack Devlopment .")
                                // .stop();
                                .start();
                            }}
                        />
                    </div>
                            {/* krishnamahtosm_cse22@its.edu.in */}
                       
                        <button onClick={(e) => {window.location.href ='mailto:krishnamahato84044@gmail.com';}} className="button md:w-3/12 w-6/12 px-2 py-1">Hire Me</button>
                        
                    
                </div>

                <div className="w-full  flex items-center justify-center">
                    <div className="navbar md:p-5 p-2 md:m-5 md:w-6/12 w-10/12 user-img">
                        <img src={profile} alt="pic" width={"full"}/>

                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="px-[10vw] pt-3"><img src="https://mattfarley.ca/img/hero-devices.svg" width="full" alt="device img"/></div>
            </div>
        </div>
    )
}