import { BsBuildings } from "react-icons/bs";
function About(){
    return (
        <div className="full flex flex-col   justify-center  items-center px-2 py-4">
            {/* Diploma */}
            <div className="w-2/3 flex gap-2 flex-col bg-slate-400 px-3 py-4 rounded hover:scale-95 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200 ease-linear">
                <div className="ml-12 flex flex-col gap-1 ">
                    <div className="flex  text-3xl gap-2">
                        <h1 className=" font-serif">Diploma</h1>
                        <BsBuildings />
                    </div>
                    <p className="font-semibold text-xl">PM Group of Institution</p>
                    <p className="font-semibold">Computer Science [ Branch ]</p>
                    <p className="font-semibold">72.52% [ marks ]</p>
                </div>
            </div>
            {/* 10 */}
            <div></div>
            {/* primary study */}
            <div></div>

        </div>
    )
}
export default About;