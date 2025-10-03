import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const switchTheme = (e) => {
        if (e=='sun') setTheme('light');
        else if (e=='moon') setTheme('dark');
    };

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}