"use client"

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme);
        }
    }, [])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center rounded-full hover:scale-[1.15] active:scale-105 transition-all' onClick={toggleTheme}>
            {
                theme === 'light' ?
                    <BsSun /> :
                    <BsMoon />
            }
        </button>
    )
}
