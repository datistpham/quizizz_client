import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { d, j , v, i3, vx, i1, c11, lk, w4, id3, id4, id5} from './Index'
import Cookies from 'universal-cookie/es6'

const cookies= new Cookies()
const F=(props)=> {

    
    let location= useLocation()

    const navigate= useNavigate()

    useEffect(()=> {
        window.scrollTo(0,0)
        document.title= 'Start Playing - Quiz'

    })
    const [state, setState]= useState(true)
    const isState= ()=> {
        setState(!state)
        navigate('/join', {replace: true})
    }
    const [data, setData]= useState([])
    location= location.pathname.split('/')[3]
    useEffect(()=> {
        const getData= async ()=> {
            await axios(`http://localhost:4000/startgame/${location}`)
            .then(res=> setData(res.data[0]))
        }
        getData()
        return ()=> {
            setData([])
        }
        //eslint-disable-next-line
    },[])

    
    return (
        <React.Fragment>
            {state &&
                <div className={props.className}>
                    <Header display={isState} className='skdmfdsczd' className1='vckdlsadsf' className2='vjdskvcllcx' />
                    <div className='djfsdklfaddf'>
                        <Component11 className='hfjsdklofd dthjfkmvlsd' className1='bifdjfsmkld' className2='gfhdfjkslgfsd'
                        className3='gfyudhfjskdml' className4='vhcjkmlgd' className5='ghdfnsjdkml'
                        className6='hfdjnskklsaka' className7='dvjkskdsa' className8='hvksdklsdkd'
                        image={data.image} summary={data.summary} question={data.question} 
                        author={data.author} />

                        {/* main */}
                            <div className='ufgysdhbasdfuyh'>
                                <div className='fdfjsdkalwvd'>
                                    <Component1 className='gfidfjoskdfd' />
                                </div>
                                <div className='dgfsbhjamlk'>
                                    <Component2 className='gfidfjoskdfd'
                                    className1='dhuijnxjiosmx' className2='djsxjdamkxzas'
                                    className3='djzxoadxkmzla' />

                                </div>
                                <div className='dgfsbhjamlk'>
                                    <Component3 className='gfidfjoskdfd ewrgdfsswdsfs'className1='fdvhijnaslmk'
                                    className2='sdaskdjnvsad' />

                                </div>
                            </div>
                            
                        
                        <Component13 className='hfjsdklofd jkdsaldfas hgfdsfgnbgf' />
                    </div>
                </div>
            }
        </React.Fragment>
    )
}
export default F

const Header= (props)=> {
    const [fullScreen, setFullScreen]= useState(true)
    const isFullScreen= ()=> {
        setFullScreen(!fullScreen)
    }
    const fsc= document.querySelector(".fkdlfklvfkccv")
    const handleClick= ()=> {
        if(fullScreen) {
            fsc.requestFullscreen()
        }
        else {
            document.webkitExitFullscreen()
        }
    }
    
    return (
        <div className={props.className}>
            <div className={props.className1} onClick={props.display}>
                {d}
            </div>
            <div className={props.className2} title={fullScreen ? 'Fullscreen' : 'Exit Fullscreen'} onClick={()=> {handleClick();isFullScreen()}}>
                {fullScreen ? j : id5}
            </div>
        </div>
    )
}


const Component111= (props)=> {
    return (
        <div className={props.className}>
            <img className={props.className1} src={props.image} alt="Can't display" />
        </div>
    )
}
const Component112= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                {props.summary} 
                {props.question} {props.qs}
            </div>
        </div>
    )
}

const Component11= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Component111 className='fksdfdgjkldflss' className1='vhdcsjklmlxdv' image={props.image} />
                <div className={props.className1}>
                    <Component112 className='uhdfjsklfdj jfdklgdsds' className1='fjdskldsfsd fgfgrwfdgdewdf' summary={props.summary}  />
                    <Component112 className='uhdfjsklfdj dfdgdfsdaa' className1='fjdskldsfsd fvbgdffbvcxscz' question={props.question} qs='Questions' />             
                </div>
            </div>

            <div className={props.className5}>
                <div className={props.className3}>
                    {v} Author: 
                </div>
                <div className={props.className4}>
                    {props.author}
                </div>
            </div>
            <div className={props.className6}>
                <button className={props.className7}><span className={props.className7}>{i3}</span><span className={props.className8}>Share</span></button>
            </div>
        </div>
    )
}
const Component13= (props)=> {
    return (
        <div className={props.className}>

        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////
const Button= (props)=> {
    const navigate= useNavigate()
    const toJoinGame= ()=> {
        if(props.linkJoin) {
            navigate(`/join/game/${props.linkJoin}?type=solo`, {replace: true, state: {type: 'solo',user: cookies.get('quizA')}})
        }
    }
    return (
        <div className={props.className} onClick={toJoinGame}>
            <div className={props.className1}>
                <button className={props.className2}><span className={props.className3}>{props.icon}</span>
                <span className={props.className4}>{props.title}</span>
                </button>
            </div>
        </div>
    )
}

const Component1= (props)=> {
    const location= useLocation()
    return (
        <React.Fragment>
            <div className={props.className}>
                <Button className='gjdfklsdda' className1='shnjkmsafa' className2='gyuhdfnskjdm ghgferfedgdr'
                className4='fjskmdlaas' icon={i1} title='Start'
                linkJoin={location.pathname.split('/')[3]}/>
            </div>
            <div className={props.className}>
            <Button className='gjdfklsdda' className1='shnjkmsafa' className2='gyuhdfnskjdm dfdbfsdsdcv'
            className4='fjskmdlaas' icon={c11} title='Challenge Friends' />
            </div>
            <div className={props.className}>
            <Button className='gjdfklsdda' className1='shnjkmsafa' className2='gyuhdfnskjdm dfdbfsdsdcv'
            className4='fjskmdlaas' icon={vx} title='Flashcards' />
            </div>
        </React.Fragment>
    )
}
///////////////////////////////////////////////////////////////////////////////
export const MainToggle= (props)=> {
    return (
        <label className={props.className}>
            <input type="checkbox" defaultChecked={props.isDark} onChange={props.toggle} />
            <span className={`${props.className1} ${props.className2}`}></span>
        </label>

    )
}
const ButtonToggle= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <div className={props.className3}>
                    {props.icon}
                </div>
                <div className={props.className4}>
                    {props.title}
                </div>
            </div>
            <div className={props.className2}>
                <div className={props.className5}>
                    <MainToggle className='switch' className1='slider' className2='round' />
                </div>
            </div>
        </div>
    )
}

const Component2= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <div className={props.className3}>
                    Settings Configuation
                </div>
            </div>
            <div className={props.className2}>
                <ButtonToggle className='dfjessdfdss' className1='snjsdiojspdokz' className2='sodjckaxzl'
                className3='jdscoaskxlz' className4='jdmzfjnvxadxz' className5='jsdcowjsmkclx' 
                icon={lk} title='Timers'/>
            </div>
            <div className={props.className2}>
                <ButtonToggle className='dfjessdfdss' className1='snjsdiojspdokz' className2='sodjckaxzl'
                className3='jdscoaskxlz' className4='jdmzfjnvxadxz' className5='jsdcowjsmkclx' 
                icon={w4} title='Memes'/>
            </div>
            <div className={props.className2}>
                <ButtonToggle className='dfjessdfdss' className1='snjsdiojspdokz' className2='sodjckaxzl'
                className3='jdscoaskxlz' className4='jdmzfjnvxadxz' className5='jsdcowjsmkclx' 
                icon={id3} title='Speakloud'/>
            </div>
            <div className={props.className2}>
                <ButtonToggle className='dfjessdfdss' className1='snjsdiojspdokz' className2='sodjckaxzl'
                className3='jdscoaskxlz' className4='jdmzfjnvxadxz' className5='jsdcowjsmkclx' 
                icon={id4} title='Power-ups'/>
            </div>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////
const Component31= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>

            </div>
            <div className={props.className2}>
                <div className={props.className3}>
                    {props.title}
                </div>
            </div>
        </div>
    )
}

const Component3= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                Topics
            </div>
            <div className={props.className2}>
                <Component31 className='gdhfnkdss' className1='djncasjxznm dvdsfdvdsfvcds'
                className2='dshjdscxasd' className3='dscxvcaszdx' title='Classic'/>
                <Component31 className='gdhfnkdss' className1='djncasjxznm efdrhfbrsfsdsd'
                className2='dshjdscxasd' className3='dscxvcaszdx' title='Synthware'/>
                <Component31 className='gdhfnkdss' className1='djncasjxznm svcdsfvcdsf'
                className2='dshjdscxasd' className3='dscxvcaszdx' title='Dogsville'/>
                
            </div>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////
// const Component4= (props)=> {
//     return (
//         <div className={props.className}></div>
//     )
// }
