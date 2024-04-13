import {Link} from "react-router-dom"
function Project(){
    return (
        <div className="w-full flex flex-col mx-auto justify-center items-center md:gap-5 gap-2">
            <div className="p-2 text-3xl font-bold underline uppercase mt-4">
                My Project
            </div>

            {/* // project Cards */}
            <div className="w-full mt-5 border p-2">

                {/* // First Card */}
                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:ml-8 md:mr-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://todo-list-smoky-three.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/14193038/Top-10-Project-Management-Trends-Emerging-in-2024-1.jpg" alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase text-3xl text-center font-semibold mb-2" >Todo List</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>
                
                {/* Second Card */}

                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:mr-8 md:ml-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://todo-list-smoky-three.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/14193038/Top-10-Project-Management-Trends-Emerging-in-2024-1.jpg" alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase text-3xl text-center font-semibold mb-2" >Todo List</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>

                {/* Third Card */}

                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:ml-8 md:mr-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://todo-list-smoky-three.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/14193038/Top-10-Project-Management-Trends-Emerging-in-2024-1.jpg" alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase text-3xl text-center font-semibold mb-2" >Todo List</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="flex gap-2 flex-col md:w-2/4 w-2/3 md:mr-8 md:ml-auto mx-auto   md:my-6 my-3 transition hover:rounded-lg hover:text-gray-700 ease-in hover:bg-gray-100 hover:-translate-y-1 hover:scale-90  duration-300 ">
                    <Link to="https://todo-list-smoky-three.vercel.app/" target="__blank">
                        <img className="w-full px-2 pt-2 rounded-lg" src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/14193038/Top-10-Project-Management-Trends-Emerging-in-2024-1.jpg" alt="phot" />
                    </Link>
                    <div className="mb-1 ">
                        <p className="uppercase text-3xl text-center font-semibold mb-2" >Todo List</p>
                        <div className="w-1/2 mx-auto h-[2px] rounded-lg bg-green-400 -mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;