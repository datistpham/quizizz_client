import React from 'react'
import { useEffect } from 'react'
import load from '../../../Images/load.png'

export default function LoadingCreateQuiz() {
    useEffect(()=> {
        document.querySelector("body").style.overflow= 'hidden'
        return ()=> {
            document.querySelector("body").style.overflow= 'auto'
        }
    })
    return (
        <div className='app-spinner-container'>
            <div className='spinner kr-anim-spin'>
                <img src={load} alt='' />
            </div>
        </div>
    )
}

