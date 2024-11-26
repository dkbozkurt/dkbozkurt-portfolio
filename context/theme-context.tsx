"use client";

import React, { useEffect } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProviderProps) {

    const [theme, setTheme] = React.useState<Theme>("light");

    const toggleTheme = () => {

        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);
    return (
        <ThemeContext.Provider value={{
            theme, toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}