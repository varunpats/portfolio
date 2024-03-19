"use client"

import { useTheme } from '@/context/theme-context';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950' onClick={toggleTheme}>
            {
                theme === 'light' ?
                    <BsSun /> :
                    <BsMoon />
            }
        </button>
    )
}
