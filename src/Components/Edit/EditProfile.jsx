import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import $ from 'jquery'
import Cookies from 'universal-cookie'
import {n,u,Ja} from '../Join/Index'
import soundfile from '../../Sounds/main-sound.mp3'
import { MainToggle } from '../Join/Game'
const cookies= new Cookies()



const updateAccount2= ()=> {
    $('.sdjdljkdfdsdsddffd').html($('.jdlksfjdfsd').val())
}
const i= <div className='jdkfdjdfkdg'>Edit Profile</div>
const E11= (props)=> {
    return (
        <div className={props.className}>
            {props.title1}
        </div>  
    )
}
//

// section 1 : Avatar
const E1211= (props)=> {
    const user= useContext(UserSelect)
    const [state, setState]= useState(false)
    const pickAvatar= ()=> {
        setState(!state)
    }
    return (
        <React.Fragment>
        <div className={props.className} onClick={pickAvatar}>
            <div className={props.className12}>
                <div className={props.className1}>
                    {props.avatar}
                </div>
                <div className={props.className2}>
                    {user.value4}
                </div>
            </div>
            <div className={props.className3}>
                <Ja />
            </div>
        </div>  
        </React.Fragment>
    )
}

// Set up avatar version 2 
const B1211= (props)=> {
    return (
        <div className={props.className}></div>
    )
}

// section 2: Account
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const E1212= (props)=> {
    const user= useContext(UserSelect)
    const [state, setState]= useState(false)
    const isState= (e)=> {
        setState(!state)
    }
    

    return (
        <div className={props.className}>
            <div className='hdjsfdfdsk' onClick={(e)=> isState(e)}>
                <div className={props.className12}>
                    <div className={props.className1}>
                        {props.accountName}
                    </div>
                    <div className={`${props.className2} ${props.className2Spe}`}>
                        {user.value1}
                    </div>
                </div>
                <div className={props.className3}>
                    <Ja />
                    
                </div>
            </div>
            {state && <B1212 isState={isState} className='jdksfldkmfsdmlf' className1='uhfsdskfjdl' className2='jnkdsfmsfkd'
            className3='jdkofdflsfd' className4='jdlksfjdfsd' className5='bbklsdjslmf'
            className6='hsdkjlksfdj' className7='jklkjddslkl' /> }
        </div>
    )
}
const B1212= (props)=> {
    const user= useContext(UserSelect)
    const userRef= useRef()
    const [state, setState]= useState(true)
    const [account, setAccount]= useState(null)
    useEffect(()=> {
        document.addEventListener('click', handleClick)
        return ()=> {
            document.removeEventListener('click', handleClick)
        }
    })
    const handleClick= (e)=> {
        if(userRef.current && !userRef.current.contains(e.target)) {
            setState(!state)
        }
    }
    const isChange= (e)=> {
        setAccount(e.target.value)
    }
    const updateAccount= async ()=> {
        await axios({
            url: `http://localhost:4000/updateaccount/${user.value7}`,
            method: 'post',
            data: {
                account: account
            }

            
        }).then(()=> ($('.kjsljfdklsgjklfdsd').html(account)))
          
          .then(()=> {
            cookies.remove('quizA') 
            cookies.set('quizA',account)
        })
    }
    return (
        <>
            {state && <div className={props.className}>
            <div className={props.className1} ref={userRef} onClick={(e)=> handleClick(e)} >
                <div className={props.className2}>Choose a name make you feeling unique!</div>
                <div className={props.className3}>
                    <input className={props.className4} defaultValue={user.value1} onChange={(e)=> isChange(e)}/>

                </div>
                <div className={props.className5}>
                    <button className={props.className6} onClick={props.isState}>Cancel</button>
                    <button className={props.className7} onClick={()=> {updateAccount();props.isState();updateAccount2();user.value8()}}>Save</button>
                </div>
            </div>
        </div>}
        </>
    )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const E1213= (props)=> {
    const user= useContext(UserSelect)
    const [state, setState]= useState(false)
    const isState= (e)=> {
        setState(!state)
    }
    

    return (
        <div className={props.className}>
            <div className='hdjsfdfdsk' onClick={(e)=> isState(e)}>
                <div className={props.className12}>
                    <div className={props.className1}>
                        {props.name}
                    </div>
                    <div className={`${props.className2} ${props.className2Spe}`}>
                        {user.value2} {user.value3}
                    </div>
                </div>
                <div className={props.className3}>
                    <Ja />
                </div>
            </div>
            {state && <B1213 isState={isState} className='jdksfldkmfsdmlf' className1='uhfsdskfjdl' className2='jnkdsfmsfkd'
            className3='jdkofdflsfd' className4='jdlksfjdfsd' className5='bbklsdjslmf'
            className6='hsdkjlksfdj' className7='jklkjddslkl' /> }
        </div>
    )
}
const B1213= (props)=> {
    const user= useContext(UserSelect)
    const userRef= useRef()
    const [state, setState]= useState(true)
    const [firstName, setFirstName]= useState(null)
    const [surName, setSurName]= useState(null)

    useEffect(()=> {
        document.addEventListener('click', handleClick)
        return ()=> {
            document.removeEventListener('click', handleClick)
        }
    })
    const handleClick= (e)=> {
        if(userRef.current && !userRef.current.contains(e.target)) {
            setState(!state)
        }
    }
    const isChange1= (e)=> {
        setFirstName(e.target.value)
    }
    const isChange2= (e)=> {
        setSurName(e.target.value)
    }
    const updateAccount= async ()=> {
        
        await axios({
            url: `http://localhost:4000/updateaccount1/${user.value7}`,
            method: 'post',
            data: {
                firstName: firstName,
                surName: surName
            }

            
        }).then(()=> ($('.kjsljfdklsgjklfdsd').html(`${firstName} ${surName}`)))
    }
    
    return (
        <React.Fragment>
            {state && <div className={props.className}>
            <div className={props.className1} ref={userRef} onClick={(e)=> handleClick(e)} >
                <div className={props.className2}>Enter your firstname</div>
                <div className={props.className3}>
                    <input className={props.className4} defaultValue={`${user.value2}`} onChange={(e)=> isChange1(e)}/>

                </div>
                <br />
                <div className={props.className2}>Enter your surname</div>

                <div className={props.className3}>
                    <input className={props.className4} defaultValue={`${user.value3}`} onChange={(e)=> isChange2(e)}/>

                </div>
                <div className={props.className5}>
                    <button className={props.className6} onClick={props.isState}>Cancel</button>
                    <button className={props.className7} onClick={()=> {updateAccount();props.isState();updateAccount2();user.value8()}}>Save</button>
                </div>
            </div>
        </div>}
        </React.Fragment>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const E1214= (props)=> {
    const user= useContext(UserSelect)
    const [state, setState]= useState(false)
    const isState= (e)=> {
        setState(!state)
    }
    

    return (
        <div className={props.className}>
            <div className='hdjsfdfdsk' onClick={(e)=> isState(e)}>
                <div className={props.className12}>
                    <div className={props.className1}>
                        Grade
                    </div>
                    <div className={`${props.className2} ${props.className2Spe}`}>
                        {user.value9 || ''}
                    </div>
                </div>
                <div className={props.className3}>
                    <Ja />
                </div>
            </div>
            {state && <B1214 isState={isState} className='jdksfldkmfsdmlf' className1='uhfsdskfjdl' className2='jnkdsfmsfkd'
            className3='jdkofdflsfd' className4='jdlksfjdfsd' className5='bbklsdjslmf'
            className6='hsdkjlksfdj' className7='jklkjddslkl' /> }
        </div>
    )
}
const B1214= (props)=> {
    const user= useContext(UserSelect)
    const userRef= useRef()
    const [state, setState]= useState(true)
    const [grade, setGrade]= useState(null)
    const [select, setSelect]= useState(true)

    useEffect(()=> {
        document.addEventListener('click', handleClick)
        return ()=> {
            document.removeEventListener('click', handleClick)
        }
    })
    const isSelect= ()=> {
        setSelect(false)
    }
    const handleClick= (e)=> {
        if(userRef.current && !userRef.current.contains(e.target)) {
            setState(!state)
            setSelect(true)
        }
    }
    const isChange= (e)=> {
        setGrade(e.target.value || '')
    }
    
    const updateAccount= async ()=> {
        
        await axios({
            url: `http://localhost:4000/updateaccount2/${user.value7}`,
            method: 'post',
            data: {
                grade: grade,
            }

            
        }).then(()=> ($('.kjsljfdklsgjklfdsd').html(grade)))
    }
    const grade_item= ['Kindergraten','1st Grade','2nd Grade','3rd Grade','4th Grade',
    '5th Grade','6th Grade','7th Grade','8th Grade','9th Grade','10th Grade'
    ,'11th Grade','12th Grade','University']
    return (
        <>
            {state && <div className={props.className}>
            <div className={props.className1} ref={userRef} onClick={(e)=> handleClick(e)} >
                <div className={props.className2}>Which grade are you ?</div>
                <div className={props.className3}>
                    <select defaultValue={user.value9 || ''} value={grade || ''} className='ihdkfdkff' onChange={(e)=> isChange(e)} onClick={isSelect}>
                        {grade_item.map(item=> <option key={uuidv4()} value={item}>{item}</option>)}
                    </select>
                   
                </div>
                
                <div className={props.className5}>
                    <button className={props.className6} onClick={props.isState}>Cancel</button>
                    <button disabled={select} className={props.className7} onClick={()=> {updateAccount();props.isState();updateAccount2();user.value8()}}>Save</button>
                </div>
            </div>
        </div>}
        </>
    )
}

///////////////////////////////////////////////////////////////////////////////
const E1215= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className12}>
                <div className={props.className1}>
                    {props.language}
                </div>
                <div className={props.className2}>

                </div>
            </div>
            <div className={props.className3}>
                <Ja />
            </div>
        </div>
    )
}
const E121= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>{props.icon}</div>
            <div className={props.className2}>{props.title}</div>
            
        </div>
    )
}

const G1211= (props)=> {
    return (
        <React.Fragment>
            <div className={props.className}>
                {props.sound}
                {props.title}
            </div>
            <div className={props.className1}>
            <span className={props.className1spe}>{props.justice}</span>    
                <MainToggle className='switch' className1='slider'
                className2='round' controls={props.controls} />
            </div>
        </React.Fragment>
    )
}

const SoundTrack =(props)=> {
    
    return (
        <div className={props.className}>
            <audio autoPlay loop >
                <source src={soundfile} type="audio/ogg" />
                <source src={soundfile} type="audio/mpeg" />
            </audio>
        </div>
    )
}

const E12= (props)=> {
    const item= [
        {component: <E1211 component={`${<B1211 />}`} className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Avatar',bonus: <Ja />},
        {component: <E1212 component={`${<B1212 />}`} className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className2Spe='kjsljfdklsgjklfdsd' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' accountName='Account' />,title: 'Account',bonus: <Ja />},
        {component: <E1213 className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className2Spe='kjsljfdklsgjklfdsd' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' name='Name' />,title: 'Name',bonus: <Ja />},
        {component: <E1214 className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' class='Class' />,title: 'Class',bonus: <Ja />},
        {component: <E1215 className='sdksdskfdds' className1spe='lmfcslkdmfklfd' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' language='language' />,title: 'Language',bonus: <Ja />}
    ]
    const [play, setPlay]= useState(false)
    const isPlay= ()=> {
        setPlay(!play)
    }

    const item2= [
        {component: <G1211 controls={isPlay} className='ksjdlkdsjlk' sound={<SoundTrack className='bacvsdxvdcsd' media={play}  />} title='Soundtrack ' component={`${<B1211 />}`} className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Background music',bonus: <Ja />},
        {component: <G1211 title='Sound Effect ' component={`${<B1211 />}`} className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Background music',bonus: <Ja />},
        {component: <G1211  title='Display memes ' component={`${<B1211 />}`} className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Background music',bonus: <Ja />},
        {component: <G1211 title='Speak Loud' component={`${<B1211 />}`} className='sdksdskfdds' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Background music',bonus: <Ja />},
        {component: <G1211 title='Topics Game' className1spe='lmfcslkdmfklfd dvwfbvdsedgeds' component={`${<B1211 />}`} className='sdksdskfdds ergfhuy7yrtfre' className1='sajkdsjslkdfjd' className2='ushdfoidjsiodjf' className12='sjkdlvcljdklsfdjs' className3='kdfksjladjddsd' avatar='Avatar' />,title: 'Background music',bonus: <Ja />},
        
    ]

    return (
        <React.Fragment>
            {props.title ==='Profile' ? 
                <div className={props.className}>
                    
                    {props.component1}
                    {item.map(item=> <div key={uuidv4()} className='jhsjdkjdksd'>{item.component}</div>)}
                </div>
                :
                <div className={props.className}>
                    
                    {props.component1}
                    {item2.map(item=> <div key={uuidv4()} className='jhsjdkjdksd fasdfdfsfdg'>{item.component}</div>)}
                </div>
            }
        </React.Fragment>
    )
}
const E1= (props)=> {

    return (
        <div className={props.className}>
            <E11 className='hfsdfjdgksf' title1={props.title1} />
            <E12 className='hbdfjdnksdd' title={props.title}  
            component1={<E121 className='rjklsdkdsad' 
            className1='hdsjfdjds' className2='jhdkklvsfs' icon={props.icon} title={props.title} />} />
        </div>
    )
}
const UserSelect= createContext()

const E= (props)=> {

    useEffect(()=> {
        document.title= 'Edit profile - Quiz'
    })

    return (
        <UserSelect.Provider value=
        {{  value1: props.accountName,
            value2: props.firstName,
            value3: props.surName,
            value4: props.nameAvatar,
            value5: props.nameAvatar1,
            value6: props.infoAvatar,
            value7: props.id_unique,
            value8: props.detect,
            value9: props.grade
        }}>
            <div className={props.className}>
                <E1 className='ishjdksfdg' icon={n} title='Profile' title1={i} />
                <E1 className='ishjdksfdg vfddsdfdhfk' icon={u} title='Settings game' />
            </div>
        </UserSelect.Provider>    
    )
}
export default E
