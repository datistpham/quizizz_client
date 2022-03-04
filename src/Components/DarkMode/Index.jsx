import React, {useEffect, useState} from 'react'
import {MainToggle} from '../Join/Game'

export default function Index() {

    const [isDark, setIsDark]= useState(false)
    const toggleThemeChange= ()=> {
        if(isDark) {
            localStorage.setItem("theme","light")
            document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "light")
            setIsDark(true)
        }
        else {
            localStorage.setItem("theme","dark")
            document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "dark")
            setIsDark(false)
        }
    }
    useEffect(()=> {
        document.getElementsByTagName("html")[0].setAttribute("data-theme", localStorage.getItem("theme"))
    })
    return (
        <div className='dark_mode'>
            <MainToggle  className='switch' className1='slider' className2='round'  isDark={isDark} toggle={toggleThemeChange} />
        </div>
    )
}
