import React, { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

const updateDarkMode = darkMode => {
    if (darkMode) {
        localStorage.theme = 'dark';
        document.body.classList.add('dark');
    } else {
        localStorage.theme = 'light';
        document.body.classList.remove('dark');
    }
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        // updateDarkMode(!darkMode);
        // setDarkMode(!darkMode);
    };

    useEffect(() => {
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useDarkMode = () => useContext(ThemeContext);