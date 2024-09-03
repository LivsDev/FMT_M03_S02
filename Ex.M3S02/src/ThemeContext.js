import React, { createContext, useState, useContext } from 'react';

// Criação do contexto com valor padrão
const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // 'light' é o valor padrão

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
