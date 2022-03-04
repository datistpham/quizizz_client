import React, { useEffect } from 'react'

export default function Loading() {
    useEffect(()=> {
        document.title= 'Loading... - Quiz'
        document.querySelector("body").style.overflow= 'hidden'
        return ()=> {
            document.querySelector("body").style.overflow= 'auto'
        }
    },[])
    return (
        <div className='screen-loading'>
            <div className='dsdfdffsasas'>
                <div className='vbfgtrdfxcsda'>
                    Quiz
                </div>
                <div className='ghtyrdtersdsd'>
                    <div className='circle-1'>
                        <div className='circle-2'>
                            <div className='circle-3'>
                                <div className='circle-4'>
                                    <div className='circle-5'>
                                        <div className='circle-6'>
                                            <div className='circle-7'>
                                                <div className='circle-8'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
