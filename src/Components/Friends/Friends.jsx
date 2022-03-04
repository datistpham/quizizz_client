import React, {useState,useEffect} from "react"
import axios from "axios"
import {v4 as uuidv4} from 'uuid'

const ListFriends= React.memo((props)=> {
    const [data, setData]= useState([])
    // console.log(cookies.get('quizA'))
    useEffect(()=> {
        document.title= 'Friends - Quiz'
        axios({
            url: 'http://localhost:4000/listfriends',
            method: 'GET',
            params: {
                user: props.friends
            }
        })
        .then(res=> setData(res.data))

        
    },[props.friends])
    return (
        <div className='sasvbdfsvcbsda'>
            {console.log(data)}
            {data.map(item=> <F key={uuidv4()} className='dsfbdsfdbdsds' className1='sfddadvsdadvc'
            className2='fdgefddsadsc' avatar={item.avatar} user={`${item.firstName} ${item.surName}`}
            ingame={item.account} online={item.online} />)}
        </div>
    )
})

const F= React.memo((props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                {/* avatar */}
                <div className='vsgfdsdvbsdfvb'>
                    <div className='fnefsdfdsedfas'>
                        <img className='fdwdvsdvcdsdcsd' src={props.avatar || 'https://gocsuckhoe.com/wp-content/uploads/2020/09/avatar-facebook-1280x720.jpg'} alt="Cant't display" />
                    </div>
                </div>
                <div className='bvsdfcdwesfdde'>
                    <div className='sfdbdsfwdsfds'>
                        {props.user}
                    </div>
                    <div className='sfdvcasdsvcdsdf'>
                        {props.ingame}
                    </div>
                </div>
            </div>
            <div className={props.className2}>
                {props.online}
            </div>
        </div>
    )
})

export default ListFriends

