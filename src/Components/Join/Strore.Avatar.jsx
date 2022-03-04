import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import $ from 'jquery'
import {w} from './Index'
import { createContext } from 'react'
import { useContext } from 'react'
import { useMemo } from 'react'

// section 1
const s= <div className='jdsjksdjsd'>Select your avatar</div>
const q= <div className='fhjgdsjkdsd'><span className='djslisdjldkaa'>Pick your avatar</span></div>


// D1 of D
const D1= React.memo((props)=> {
    const user= useContext(UserContext)
    return (
        <div className={props.className}>
            <div className={props.className1}>
                {/*  */}

                <img className={props.className5} src={user.value4 || `https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-plus-circle-thin.png`} alt="Can't display" />
            </div>
            <div className={props.className2}>
                <div className={props.className3}>
                    {user.value5 || `Pick an image make your avatar`} 
                </div>
                <div className={props.className4}>
                    {user.value6}
                </div>
            </div>
        </div>
    )
})
// D of S1
const D= (props)=> {
    const user= useContext(UserContext)
    const user3= useContext(UserContext)
    const id_unique= useMemo(()=> (user3.value3),[user3.value3])
    $('.jhskvnbmsad').on('click',async function() {
        $('.jfjdsd_djsd_w4u8e_48iw9').attr('src',$('.fauhfskdjkasa').attr('src'))
        
        axios({
            url: `http://localhost:4000/uploadavatar/${id_unique}`,
            method: 'post',
            data: {
                avatar: $('.jfjdsd_djsd_w4u8e_48iw9').attr('src'),
                name_avatar: $('.jhsklojdoddsad').html(),
                info_avatar: $('.jhbkdsfjsfad').html()
            }
        })
    })
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <D1 className='jsskdsfnjsd' className1='hssdkmdsdfdf'
                className2='jkssakdsdskf' className3='jhsklojdoddsad'
                className4='jhbkdsfjsfad' className5='fauhfskdjkasa' />
            </div>
            <div className={props.className2}>
                <button className={props.className3} onClick={()=> {user.value2();user.value1();user.value7()}}>{q}</button>
            </div>
        </div>
    )
}

const S1= (props)=> {
    const user= useContext(UserContext)
    return (
        <div className={props.className}>
            {s}
            <D className='fusdjsdjksa' className1='husdkvcdksf' 
            className2='hdsjfbsdjkffs' className3='jhskvnbmsad' />
            <div className='fshjaopdkdoasp' onClick={user.value1}>{w}</div>
        </div>
    )
}

// C of S2

const C= (props)=> {
    
    const showSrc= (e)=> {
        $('.fauhfskdjkasa').attr('src',e.target.src)
        $('.jhsklojdoddsad').html(props.name_avatar)
        $('.jhbkdsfjsfad').html(props.info_avatar)
    }
    
    return (
        <React.Fragment>
            
            <div className={props.classNameSpe}>
                <div className={`${props.className}`}>
                    <div className={props.className1}>
                        <img className={props.className5} src={props.image} name_avatar={props.name_avatar} info_avatar={props.info_avatar} alt="can't display... Sorry " onClick={(e)=> showSrc(e)} />
                    </div>
                    <div className={props.className2}>
                        {/*  */}
                            <div className={props.className6}>
                                <div className={props.className3}>

                                </div>
                            </div>
                        <div className={props.className4}>
                            {props.name_avatar}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
// section 2
const S2= React.memo((props)=> {
    // props.data
    return (
        <div className={props.className}>
            <div className={props.className2}>
                {props.data.map(item=> <C key={uuidv4()} classNameSpe='kldfjkldjas' className='sidjsdddos' className1='sjdskmaksas'
                className2='kldsmlmdfksd' className3='fjskldsasads' className4='fijsdkakssa'
                className5='vsdjskdjadkad' className6='djsdfhfsjlkfd' image={item.avatar} name_avatar={item.name_avatar} info_avatar={item.info_avatar}/>)}
            </div>
        </div>
    )
})

const UserContext= createContext()
const S= (props)=> {
    const [data, setData]= useState([])
    useEffect(()=> {
        document.querySelector("body").style.overflow= 'hidden'
        document.title= 'Setup your avatar - Quiz'
        axios.get('http://localhost:4000/storeavatar').then(res=> setData(res.data))
        
        return ()=> {
            document.querySelector("body").style.overflow= 'auto'
        }
    },[])
    
    
    return (
        <UserContext.Provider value={{value1: props.closeS,value2: props.pickAvatar,value3: props.id_unique,value4: props.avatarDefault,
        value5: props.nameAvatar, value6: props.infoAvatar,value7: props.detect}}>
            <div className={props.className}>
                <div className={props.className2}>
                    <div className={props.className3}>
                        <S1 className='jsdkjrieo dsjksjkalsa' />
                        <S2 className='jsdklsas asjkalsjas' className2='jsmaksajsds' data={data} />
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    )
}

export default React.memo(S)
