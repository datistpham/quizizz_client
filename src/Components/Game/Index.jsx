import React from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client'
import Index from '../DarkMode/Index';

const socket= io('http://localhost:4000/', {transports: ['websocket']})

const QF = () => {
    
    useEffect(()=> {
    socket.connect()
        document.title= 'Game - Quiz'
        return ()=> {
            socket.disconnect()
        }
    },[])
    const isClick= ()=> {
        socket.emit('login','giang')
    }
    const isClick2= ()=> {
        socket.emit('kick','giang')
    }
    return (
        <div className='dsfdgnfdsa'>
            <button onClick={isClick}>Click vao day</button>
            <button onClick={isClick2}>Click vao day</button>
            <Index />
        </div>
    );
}

export default React.memo(QF)
