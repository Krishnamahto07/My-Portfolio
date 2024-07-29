import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RxVercelLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./Style/Navbar.css"
function Footer(){
    return (
        <div className="footer w-full h-full   flex justify-center flex-col items-center gap-5 ">
            <div className=" mt-5 flex items-center justify-center gap-3"><span className="md:text-4xl text-3xl font-bold">Hii</span><img className="hand" width="50" height="full" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="waving-hand-emoji"/></div>
            <h2 className="md:text-3xl text-xl font-semibold  text-center ">I’m Krishna. Nice to meet you.</h2>
            <p className="md:text-sm   text-center text-xs font-semibold ">I design and code beautifully simple things, and I love what I do.</p>


            {/* button k liye */}
            
            <div className="w-full flex justify-center flex-col items-center gap-5 md:my-1 my-3 ">
                
                <div className="flex gap-3 text-2xl">
                    <NavLink to="https://www.linkedin.com/in/krishna-mahto-092977294/" target="__blank"><div className="icon "><FaLinkedin /></div></NavLink>
                    <NavLink to="https://github.com/Krishnamahto07" target="__blank"><div className="icon "><FaGithub /></div></NavLink>
                    <NavLink to="https://vercel.com/krishna-mahtos-projects" target="__blank"><div className="icon "><RxVercelLogo /></div></NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=100067515062382" target="__blank"><div className="icon "><FaFacebook /></div></NavLink>
                    <NavLink to="https://www.instagram.com/krrish_naa07/" target="__blank"><div className="icon "><GrInstagram /></div></NavLink>
                </div>
                <div className="h-1 w-6/12 md:w-4/12 app rounded-lg shadow-black"></div>
                
            </div>
            
            
            {/* text link k liye */}
            <div>Krishna Mahto</div>
            {/* for copyright text */}
            <div className="mb-5 underline font-semibold text-center">@ Krishna mahto | all Rights Reserved </div>
        </div>
    )
}
export default Footer;