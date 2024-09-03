// ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
    const { toggleTheme, theme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Alternar para tema {theme === 'light' ? 'escuro' : 'claro'}
        </button>
    );
}

export default ThemeToggle;
