import React, { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
const cookies= new Cookies()

const L= (props)=> {
    // const navigate= useNavigate()
    const navigate= useNavigate()
    useEffect(()=> {
        document.title= 'Logout - Quiz'
        document.querySelector("body").style.overflow= 'hidden'
        return ()=> {
            document
            .querySelector("body").style.overflow= 'auto'
        }
    },[])
    const delete_cookie= (cookie)=> {
        document.cookie = cookie +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }

    const isLogOut= ()=> {
        delete_cookie('quizA')  
        navigate('/', {replace: true})  
    }
    const isNotLogOut= ()=> {
        navigate('/join/home', {replace: true})
    }
    
    
    return (
        <div className={props.className}>
            <div className='fndefddffddsedfd'>
                <div className='bndesfbqACBCFSD'>
                    Are you sure want to log out ? 
                </div>
                <div className='fdesfgddefdgdsefdg'>
                    <div className='fgjdokssfdmssd'>
                        <button className='scvsasdvsadsvc' onClick={isLogOut}>Yes</button>
                    </div>
                    <div className='fnvdsefbvdssfbc'>
                        <button className='dsffdsdfdsdfdd' onClick={isNotLogOut}>No</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default L