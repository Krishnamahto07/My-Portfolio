import { BsBuildings } from "react-icons/bs";
function About(){
    return (
        <div className="w-full flex flex-col   justify-center  items-center px-2 ">
            <br />
            <div className="sm:w-2/3 w-[95%] flex gap-2 flex-col bg-slate-400 px-0 sm:px-3 py-4 rounded hover:scale-95 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200 ease-linear">
                <div className="ml-12 flex flex-col gap-1 ">
                    <div className="flex text-blue-950 font-bold text-3xl gap-2">
                        <h1 className="">B-tech </h1>
                        <BsBuildings />
                    </div>
                    <p className="font-semibold text-xl">ITS ENGINEEING COLLAGE </p>
                    <p className="font-semibold text-sm text-yellow-900">Greater Noida , UP</p>
                    <p className="font-semibold">Computer Science </p>
                    <p className="font-semibold">70.65 % [ marks ]</p>
                </div>
            </div>
<br />
            <div className="sm:w-2/3 w-[95%] flex gap-2 flex-col bg-slate-400 px-0 sm:px-3 py-4 rounded hover:scale-95 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200 ease-linear">
                <div className="ml-12 flex flex-col gap-1 ">
                    <div className="flex text-blue-950 font-bold text-3xl gap-2">
                        <h1 className="">Diploma</h1>
                        <BsBuildings />
                    </div>
                    <p className="font-semibold text-xl">PM group of Institution</p>
                    <p className="font-semibold text-sm text-yellow-900">Sonipat , HARYANA</p>
                    <p className="font-semibold">Computer Science </p>
                    <p className="font-semibold">72.52 % [ marks ]</p>
                </div>
            </div>
            
<br />
            <div className="sm:w-2/3 w-[95%] flex gap-2 flex-col bg-slate-400 px-0 sm:px-3 py-4 rounded hover:scale-95 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200 ease-linear">
                <div className="ml-12 flex flex-col gap-1 ">
                    <div className="flex text-blue-950 font-bold text-3xl gap-2">
                        <h1 className="">10th</h1>
                        <BsBuildings />
                    </div>
                    <p className="font-semibold text-xl">BSEB</p>
                    <p className="font-semibold text-sm text-yellow-900">Madhubani , BIHAR</p>
                    <p className="font-semibold">Hindi Medium </p>
                    <p className="font-semibold">65% [ marks ]</p>
                </div>
            </div>
            <br />
        </div>
    )
}
export default About;