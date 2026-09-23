import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme :() => {}
});


const getInitialTheme = () => {

    const savedTheme = localStorage.getItem('app-theme');
    
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return 'light';

}


export function ThemeProvider({ children}){

    const [theme, setTheme] = useState(getInitialTheme);


    useEffect(() => {
      
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('app-theme', theme);



    }, [theme]);
    


    const toggleTheme =() => {
        console.log('toogle theme clciked');
        
        setTheme((prevTheme) => (prevTheme === "light" ?"dark" : "light"));
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export function useTheme(){
    return useContext(ThemeContext);
}





