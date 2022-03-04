import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { d ,id13} from '../Join/Index'

const Component11= (props)=> {
    return (
        <div className={props.className}>
            {props.cate}
        </div>
    )
}
const Img= (props)=> {
    return (
        <img src="https://cf.quizizz.com/img/illustrations/lesson.png" alt="" className='dsfbvndsf' style={{width: 40, height: 40, borderRadius: '50%'}} />
    )
}
const Title= (props)=> {
    return (
        <React.Fragment>
            <div className='fdbvsdfdvdscx'>Create an examination</div>
            <div className='bsdasvddsfdvc'>Ideal for student-paced sessions or self-paced exercises.</div>
        </React.Fragment>
    )
}
const Close= (props)=> { 
    const navigate= useNavigate()
    const isNavigate= ()=> {
        navigate('/join/home', {replace: true})
    }
    return (
        <div className='fdbvadsfvcds' onClick={isNavigate}>
            {d}
        </div>
    )
}
const Component1= (props)=> {
    return (
        <div className={props.className}>
            <Component11 className='bwefdfdsed' cate={<Img />} />
            <Component11 className='bwefdfdsed fnfddfgvbfdsed' cate={<Title />} />
            <Component11 className='bwefdfdsed' cate={<Close />} />
            
        </div>
    )
}

const Component2= (props)=> {
    const [limit, setLimit]= useState(0)
    const isLimit= (e)=> {
        setLimit(e.target.value.length)
    }
    return (
        <div className='dfdbsaIOJEsk'>
            <div className='fnsdfdvcdda'>
                1. Set name for this question
            </div>
            <div className='dfbvhfgdzsdcx'>
                <div className='dscvxdsadcxas'>{limit}/64</div>
                <input type="text" className='fgfwqdsfgdsdsd' onChange={(e)=> isLimit(e)} maxLength={64} minLength={3} />
            </div>
            <div className='fdbfdesdcxWAs'>
               {id13} please enter name long than 3 charaters
            </div>
        </div>
    )
}

const Component3= (props)=> {
    return (
        <div className='dvbsawdsfvcdsad'>
            <div className='dbvbasdzcxvd'>
                2. Choose topics related
            </div>
        </div>
    )
}
export default function AS(props) {
    useEffect(()=> {
        document.querySelector("body").style.overflow= 'hidden'
        document.title= 'Create a new Quiz - Quiz'
        return ()=> {
            document.querySelector("body").style.overflow= 'auto'
        }
    },[])
    return (
        <div className='dbfewfdbvfdesfdb'>
            <div className='fdgfhrojekmfde'>
                <Component1 className='sfbvdsfvds' />
                <Component2 />
                <Component3 />
            </div>
        </div>
    )
}
