import React, { lazy, Suspense, useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import soundfile from '../../../Sounds/countdown-sound.mp3'

const Loading= lazy(()=> {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./Loading')), 2000);
    });
  })
const Index=(props)=> {
    useEffect(()=> {
        document.querySelector("body").style.overflow= 'hidden'
        return ()=> {
            document.querySelector("body").style.overflow= 'auto'
        }        
    })
    const [state, setState]= useState(3)
    const countDown= ()=> setInterval(()=> {
        if(state===-1) {
            clearInterval(countDown)
        }
        setState((state)=> state-1)
    },1000)
    useEffect(()=> {
        document.title= "Ready" 
        countDown()
        return ()=> {
            setState(0)
        }
    // eslint-disable-next-line
    },[])
    
    return (
        <Suspense fallback={<Loading />}>
            <div className={props.className}>
                <div className={props.className1}>
                    <p className={props.className2}>
                        {state >= 0 ? state : ''}
                    </p>
                </div>
            </div>
        </Suspense>
    )
}

export default Index