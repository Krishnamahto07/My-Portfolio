import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RxVercelLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./Style/Navbar.css"
function Footer(){
    return (
        <div className="footer w-full h-[30vh]   flex justify-center flex-col items-center gap-5">
            {/* button k liye */}
            <div className="w-full flex justify-center flex-col items-center gap-5 ">
                
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
            <div>@ Krishna mahto | all Rights Reserved </div>
        </div>
    )
}
export default Footer;