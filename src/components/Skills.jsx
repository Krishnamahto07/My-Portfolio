import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";




function Skills(){
    return (
        <div className="w-full ">
            {/* <h1 className="text-9xl text-purple-300 bottom-0 absolute right-0  font-bold shadow-inner select-none">Skills</h1> */}
            <div className='w-full flex gap-8 flex-col items-center mx-auto my-5'>
                <div className='flex flex-col gap-5 '>
                    <div className="flex flex-col gap-2 mx-auto">
                        <h2 className="md:text-6xl text-2xl font-semibold text-purple-400 p-1">Good In</h2>
                        <div className="h-1 w-full navbar "></div>
                    </div>
                    <div className='flex gap-5 w-2/3 flex-wrap justify-center items-center mx-auto mt-2'>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><FaJava /></div>
                            <p className="text-3xl font-semibold">Java</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl "><FaHtml5 /></div>
                            <p className="text-3xl font-semibold">HTML</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl"><IoLogoCss3 /></div>
                            <p className="text-3xl font-semibold">CSS</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl"><SiJavascript /></div>
                            <p className="text-3xl font-semibold">JS</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl"><SiTailwindcss /></div>
                            <p className="text-3xl font-semibold">Tailwind</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl"><FaReact /></div>
                            <p className="text-3xl font-semibold">React</p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col gap-2 mx-auto">
                        <h2 className="md:text-6xl text-2xl font-semibold text-purple-400 p-1">Familiar With</h2>
                        <div className="h-1 w-full navbar "></div>
                    </div>
                    <div className='flex gap-7 md:w-2/3 w-10/12 flex-wrap justify-center items-center mx-auto mt-2'>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><SiExpress /></div>
                            <p className="text-3xl font-semibold">Express Js</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><SiMongodb /></div>
                            <p className="text-3xl font-semibold">MongoDB</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><TbBrandNodejs /></div>
                            <p className="text-3xl font-semibold">Node Js</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><FaPython /></div>
                            <p className="text-3xl font-semibold">Python</p>
                        </div>
                        {/* <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="text-7xl"><SiTailwindcss /></div>
                            <p className="text-3xl font-semibold">Tailwind</p>
                        </div>
                        <div className="flex gap-2 skill-img flex-col items-center">
                            <div className="md:text-7xl text-5xl "><FaReact /></div>
                            <p className="text-3xl font-semibold">React</p>
                        </div> */}
                    </div>
                </div>
                <div></div>

                {/* <div>
                    <h2>Till Learning</h2>
                    <div className="h-1 w-full navbar "></div>
                </div>
                <div></div>

                <div>
                    <h2>Achivement</h2>
                    <div className="h-1 w-full navbar "></div>
                </div> */}
                <div></div>
            </div>
        </div>
    )
}
export default Skills;