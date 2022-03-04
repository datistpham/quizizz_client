import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import Cookies from 'universal-cookie'
import { lazy, Suspense } from 'react'
import Loading from '../Join/CountDown/Loading'

const ListFriends= lazy(()=> {
    return new Promise((resolve=> {
        setTimeout(()=> {
            resolve(import('./Friends'))
        },2000)
    }))
})

const cookies= new Cookies()
const socket= io('http://localhost:4000/', {transports: ['websocket']})

const Friends= (props)=> {
    // console.log(props.user)
    const [friends, setFriends]= useState([])
    useEffect(()=> {

        socket.connect()
        return ()=> {
            socket.disconnect()
        }
    })
    useEffect(()=> {
        socket.emit('online', props.user)
    },[props.user])
    useEffect(()=> {
        document.title= 'Friends - Quiz'
        axios({
            url: 'http://localhost:4000/allfriends',
            method: 'get',
            params: {
                user: cookies.get('quizA')
            }
        })
        .then(res=> res.data.map(item=> setFriends((prev)=> [...prev,item.friends])))
            
    },[])
    
    
    return (
        <div className='dsbvadcbsadsvc'>
            <div className='fbwdasbdsefsdbds'>
                <div className='dsfvsfdssdsd'>
                    Friends
                </div>
                <Suspense fallback={<Loading />}>
                    <ListFriends friends={friends} />
                </Suspense>
            </div>
        </div>
    )
}

export default React.memo(Friends)
