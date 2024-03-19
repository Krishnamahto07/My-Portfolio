import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
export default function ThemeBtn(){
    const [flag,setFlag] = useState(true);
    function btnHandler(){
        setFlag(!flag)
    }
    return (
        <div onClick={btnHandler}>
            {
                flag === true ? <FaRegMoon /> : <IoSunny />
            }
        </div>
    )
}