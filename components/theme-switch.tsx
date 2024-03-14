import React from 'react'
import { BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
    return (
        <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center rounded-full hover:scale-[1.15] active:scale-105 transition-all'>
            <BsSun />
        </button>
    )
}
