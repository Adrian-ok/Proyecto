import React, { useState, useEffect } from 'react'

export function useDarkMode() {

    const [theme, setTheme] = useState(window.localStorage.getItem('theme'))
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        window.localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return { theme, setTheme }
}
