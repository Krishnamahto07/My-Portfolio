import {Link} from "react-router-dom"
import StudyNotion from "../assets/Screenshot (9).png"
import Youtube from "../assets/Screenshot (12).png"
import Todo from "../assets/Screenshot (14).png"
import Tiktak from "../assets/Screenshot (15).png"
function Project(){
    return (
        <div className="w-full flex flex-col mx-auto justify-center items-center md:gap-5 gap-2">

            <div className="p-2 text-3xl font-bold  underline uppercase mt-4">
            My Project
            </div>
                  <sup className="text-sm ">click to open</sup>

            {/* // project Cards */}
            <div className="w-full mt-5 border p-2">

                {/* // First Card */}
                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:ml-8 md:mr-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://study-notion-two-liart.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src={StudyNotion} alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase sm:text-3xl text-xl text-center font-semibold mb-2" >StudyNotion Ed-Tech </p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>
                
                {/* Second Card */}

                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:mr-8 md:ml-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://new-youtube-clone-advance-krishna.netlify.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src={Youtube} alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase sm:text-3xl text-xl text-center font-semibold mb-2" >Youtube Lite</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>

                {/* Third Card */}

                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:ml-8 md:mr-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://todo-list-smoky-three.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src={Todo} alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase sm:text-3xl text-xl text-center font-semibold mb-2" >Todo List</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:mr-8 md:ml-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://krishnamahto07.github.io/TikTakToe/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src={Tiktak} alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase sm:text-3xl text-xl text-center font-semibold mb-2" >Tik Tak Toe</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;