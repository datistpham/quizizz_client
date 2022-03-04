import axios from 'axios'
import React, { useState } from 'react'
import { memo } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Main14S() {
    return (
        <div className='fdngfwsdfsd'>
            <div className='fbvfdsfdbdsfdgdsedf'>
                <div className='fbvsdfdsfcb'>
                    See questions again
                </div>
                <div className='dfdgfwfdsaas'>
                    Pick questions to see answer
                </div>
                <G />
                 
            </div>
        </div>
    )
}

const G= memo((props)=> {
    const location= useLocation()
    const [question, setQuestion]= useState([])
    const [answer, setAnswer]= useState([])
    useEffect(()=> {
        axios.all([
            axios.get(`http://localhost:4000/result_answer/summary/${location.pathname.split('/')[3]}/${location.state.user}`),
            axios.get(`http://localhost:4000/list_answer/summary/${location.pathname.split('/')[3]}/${location.state.user}`)
        ])
        .then(axios.spread((obj1, obj2)=> {
            setQuestion(obj1.data)
            setAnswer(obj2.data)
        }))
    },[location.pathname,location.state])
    return (
        <div className='dfddsvadsfdsas'>
            {question.map(item=> <F className='fdsvdsfvdsad'
            data={item} />)}
        </div> 
    )
})
const F= memo((props)=> {
    return (
        <div className={props.className}>
            <div className='vsadcfxvsdds'>
                {Object.values(props.data).map(item=> <div>{console.log(item[1])}</div>)}
            </div>
            <div className='dvcbsddsaaa'>
                {Object.values(props.data).map(item=> <K className='dsdadsasdsfa' />)}
            </div>
        </div>
    )
})

const K = (props)=> {
    return (
        <div className={props.className}>

        </div>
    )
}