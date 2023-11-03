import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkMode : () =>{},
    lightMode : () => {}
});   // initial values passing

export  const ThemeContextProvider = ThemeContext.Provider

const useThemeContext = () => useContext(ThemeContext)  // basicaaly hook create so that 2 times create nahi krna pda... 
export default useThemeContext;