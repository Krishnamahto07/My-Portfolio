import { BiLogoKickstarter } from "react-icons/bi";
import { NavLink } from "react-router-dom"
import { Menu ,X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeBtn from './ThemeBtn'
import './Style/Navbar.css'
const Navbar = () =>{
    const [isOpen , setIsOpen] = useState(false)
    const [theme , setTheme] = useState('dark-theme');
    function toggleTheme(){
        theme === "dark-theme" ? setTheme("light-theme"):setTheme("dark-theme");
    }
    useEffect(()=>{
        document.body.className=theme;
    },[theme]);
    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }
    const toggle = () =>{
        toggleTheme();
        toggleNavbar();
    }
   
    
    return (
        <>
        <div className="navbar text-[EDEDED] sticky top-0 z-[20] mx-auto flex w-full flex-wrap justify-between items-center p-4 border border-gray-500">

            <div className="sm:mx-9 mx-0 flex items-center"><BiLogoKickstarter className="text-4xl" /><span className="text-xl ml-[-5px]">rishna</span></div>

            <div className="w-1/3">
                <div className="hidden md:flex justify-between">
                    <NavLink className="nav-btn" to="/">Home</NavLink>
                    <NavLink className="nav-btn" to="/about">About</NavLink>
                    <NavLink className="nav-btn" to="/project">Project</NavLink>
                    <NavLink className="nav-btn" to="/skills">Skills</NavLink>
                    <div className="nav-btn mr-4 text-2xl" onClick={()=>{toggleTheme()}}><ThemeBtn /></div>
                </div>
            </div>

            <div className="md:hidden">
                <button onClick={toggleNavbar}>
                    {
                        isOpen ? <X /> : <Menu/>
                    }
                </button>
            </div>

            {
                isOpen && (
                    <div className="flex flex-col basis-full items-center transition duration-300 gap-3">
                        <NavLink onClick={()=>{toggleNavbar()}}  to="/" className="nav-btn">Home</NavLink>
                        <NavLink onClick={()=>{toggleNavbar()}} className="nav-btn" to="/about">About</NavLink>
                        <NavLink onClick={()=>{toggleNavbar()}} className="nav-btn" to="/project">Project</NavLink>
                        <NavLink onClick={()=>{toggleNavbar()}} className="nav-btn" to="/skills">Skills</NavLink>
                        <div  className="nav-btn" onClick={()=>{toggle()}}><ThemeBtn /></div>
                    </div>
                )
            }

        </div>
        </>
    )
}
export default Navbar;