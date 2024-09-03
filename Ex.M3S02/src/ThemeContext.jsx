// ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Criação do contexto com um valor padrão
const ThemeContext = createContext({
    theme: 'light', // Valor padrão para o tema
    toggleTheme: () => {} // Função de alternância sem implementação padrão
});

// Hook personalizado para uso do tema
export function useTheme() {
    return useContext(ThemeContext);
}

// Provider que gerencia o estado do tema e fornece para os componentes filhos
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Inicia com o tema claro

    // Função para alternar entre claro e escuro
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
