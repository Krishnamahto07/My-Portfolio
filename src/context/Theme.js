import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeValue:"dark",
    darkMode:()=>{},
    lightMode:()=>{}
})
export const ThemeProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext)
}