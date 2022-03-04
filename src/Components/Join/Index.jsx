import React, {useState, useEffect, lazy, Suspense, createContext, useContext, useMemo, useRef } from 'react'
// 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faHistory, faUsers, faPlus, faTimes,faShareAlt, faPlay, faBars,faMedal,faUser,
faPlusCircle, faTimesCircle, faUserEdit, faCogs, faChevronRight, faExpand, faChalkboardTeacher,faPause,faCoins,
faClock,faSmileBeam,faCommentDots,faFlask,faMusic,faSearchPlus,faArrowRight,faExclamationCircle,faGamepad,faUserFriends,
faExternalLinkAlt, faCompress } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom' 
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import Cookies from 'universal-cookie';
import L from './Logout'
import $ from 'jquery'
import Index  from './CountDown/Index'
import Loading from './CountDown/Loading'
import LoadingCreateQuiz from './CountDown/LoadingCreateQuiz'
import Friends from '../Friends/Index'
const AS= lazy(()=> {
    return new Promise(resolve=> {
        setTimeout(()=> resolve(import('../Complete/CreateQuiz')),2500)
    })
})
const Gs= lazy(()=> {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./InGame')), 3500)
    })
  })
const S= lazy(()=> {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./Strore.Avatar')), 500)
    })
})

// import { useDetectClickOutside } from "react-detect-click-outside"
const Xe= lazy(()=> import('./SeeMore'))
const QF= lazy(()=> {
    return new Promise(resolve=> {
        setTimeout(()=> resolve(import('../Game/Index')),1250)
    })
})
const BA= lazy(()=> {
return new Promise(resolve => {
    setTimeout(() => resolve(import('./Activity.Componet')), 750);
});
})
const E= lazy(()=> {
return new Promise(resolve => {
    setTimeout(() => resolve(import('../Edit/EditProfile')), 750);
});
})
const F= lazy(()=> {
return new Promise(resolve => {
    setTimeout(() => resolve(import('../Join/Game')), 2000);
});
})
const cookies = new Cookies()
// import $ from 'jquery'


// icon
export const id14= <FontAwesomeIcon icon={faUserFriends} />
export const id13= <FontAwesomeIcon icon={faExclamationCircle} />
export const id12= <FontAwesomeIcon icon={faUser} />
export const id11= <FontAwesomeIcon icon={faArrowRight} />
export const id10= <FontAwesomeIcon icon={faSearchPlus} />
export const id9= <FontAwesomeIcon icon={faMusic} />
export const id8= <FontAwesomeIcon icon={faMedal} />
export const id7= <FontAwesomeIcon icon={faCoins} />
export const id6= <FontAwesomeIcon icon={faPause} />
export const id5= <FontAwesomeIcon icon={faCompress} />
export const id3= <FontAwesomeIcon icon={faCommentDots} />
export const id4= <FontAwesomeIcon icon={faFlask} />
export const lk= <FontAwesomeIcon icon={faClock} />
export const w4= <FontAwesomeIcon icon={faSmileBeam} />
export const n= <FontAwesomeIcon icon={faUserEdit} />
export const u= <FontAwesomeIcon style={{color: '#2d9da6'}} icon={faCogs} />
export const Ja=()=>  <FontAwesomeIcon icon={faChevronRight} />

export const w= <FontAwesomeIcon icon={faTimesCircle} />
export const d= <FontAwesomeIcon icon={faTimes} />
export const j= <FontAwesomeIcon icon={faExpand} />
export const v= <FontAwesomeIcon icon={faChalkboardTeacher} />
export const vx= <FontAwesomeIcon icon={faExternalLinkAlt} />
const i= <FontAwesomeIcon icon={faSearch}/>
const o= <FontAwesomeIcon icon={faBars} />
const m= <FontAwesomeIcon icon={faPlusCircle} />
export const c11= <FontAwesomeIcon icon={faUsers} />


// button
const B1= (props)=> {

    return (
        <NavLink to={props.navLink}>
            <div className='_dnafsda_Djds_Dad'>

                <button onClick={props.isAuthentication} className={props.className}><span className={props.className1}>{props.icon}</span><span className={props.className2}>{props.nameButton}</span></button>
            </div>
        </NavLink>
    )
}

// home component


// join game and info
const b1= <FontAwesomeIcon icon={faPlus}/>

const c1= [{link: '/join/editprofile',title: 'Edit profile'}, {link: '/join/activities/running', title: 'Watch activities'}]
const c2= [{link: '/', title: 'Sign up'}, {link: '/', title: 'Log in'}]
const P= (props)=> {
    return (
        <NavLink to={props.navLink}>
            <div className='_sdjkd_9wie_q9iwo'>
                <div className='_93kds_dwks_00wie'>{props.title}</div>
            </div>
        </NavLink>
    )
}
const c= <div className='_i4wek_3iwke_32ew'>Create an account</div>

export const K= React.memo((props)=> {
    const user= useContext(UserSelect)
    const user2= useContext(UserSelect2)
    // const [avatar, setAvatar]= useState(false)
    
    const [state, setState]= useState({
        state1: false,
        cursor: 'pointer'
    })
    // eslint-disable-next-line
    const value= useMemo(()=> (props.displayAvatar),[props.displayAvatar])
    useEffect(()=> {
        
        if(user===null) {
            setState({state1: true, cursor: 'not-allowed'})
        }
        if (cookies.get('quizA')) {
            setState({state1: false, cursor: 'pointer'})

        }
    // eslint-disable-next-line
    },[])
    
    return (
        <Suspense fallback={<Loading />}>

            <div className='_dskod_8uwe_38uwei'>
                <div className='_sdn_wjei_ewij'>
                    <div className='_93w_39iwe_83qjeiwr'>
                        <div className='_9i0er0mf_32i0we_we'>
                            <div className='_weok_04iwe_39we'>
                                <input type="text" placeholder='Enter code join game'/>
                            </div>
                            <div className='_93wi_389uwje_38qjwe'>
                                <button className='jizjskldjfkljfsd'>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='_dsmk_39wei_eiwk'>
                    {/* first */}
                    <div className='_dsdk_dskd_wqje'>
                        <div className='_sdkmc_djsd_ds'>
                            {/* name user */}
                            <div className='_dsds_w9ie_49wekd'>
                                {user===null ? c : user}
                            </div>
                            {/* avatar build in */}
                            <button onClick={props.pickAvatar} disabled={state.state1} style={{cursor: `${state.cursor}`}} className='_sdmks_dks_dsmd_Sa'>
                                {user2!==null ? <img src={user2 || `https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-plus-circle-thin.png` } alt="Can't display" className='jfjdsd_djsd_w4u8e_48iw9' draggable='false' width='1000px' height='1000px' />
                                :
                                !props.displayAvatar && b1}  
                                
                                                        
                            </button>
                        </div>
                    </div>
                    {/* second */}
                    <div className='_dskmc_843sds_32jew'>
                        {
                        
                        user ? 
                        c1.map(item=> <P key={uuidv4()} navLink={item.link} title={item.title} />) 
                        : 
                        c2.map(item=> <P key={uuidv4()} navLink={item.link} title={item.title} />) 
                        
                        }
                                    
                    </div>
                </div>
            </div>
        </Suspense>
    )
})
//
const V1= (props)=> {
    return (
        <div className='_30qck_93e_3ejd_3qi'>
            <div className='_3qw_39q_iwe93q'>
                {props.title}
            </div>
            <div className='_fdj_erj_32usdsl'>
                <NavLink className='_kdsm_48jri_irk2w' to={`/join/${props.linkTo}`}>
                    {props.seemore && <button disabled={props.disabled} className='_kds_wuej_ewji'>{props.seemore}</button>}
                </NavLink>
            </div>

        </div>
    )

}
//
const X1= (props)=> {
    const numberToK=(k)=> {
        if(parseInt(k)>1000) {
            k= Math.round(parseInt(k)/1000)+'k'
        }
        return k
    }
    return (
        <div className='_94wie_29ei_239iewk' style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className='_42ewd_329iw_32iewk'>
                <div className='_249wed_48uwij_13qws'>
                    <button className='_3ds_39qiek_39iewk' style={{color: '#292A3a'}}>
                        {props.question}
                    </button>
                    <button className='_3ds_39qiek_39iewk' style={{color: '#292A3a'}}>
                        {numberToK(props.number_of_users)} players
                    </button>
                </div>
                <div className="custom-shape-divider-top-1637472853">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
const X2= (props)=> {
    return (
        <div className='_4dds_392w_4iew_3iwq'>
            <div className='_ewjkds_9wiek_32ed'>
                {props.title}
            </div>
        </div>
    )
}
const X3= (props)=> {
    return (
        <div className='_23dsaa_32d_32weas'>
            <div className='_dsk_w094e_9weid'>
                <span className='_2309e_329iwe'>{props.accuracy}</span>
            </div>
        </div>
    )
}
const X4= ()=> {
    return (
        <div className='_32jds_390xas_9qwk'>
            
        </div>
    )
}

const W11= (props)=> {
    const numberToK=(k)=> {
        if(parseInt(k)>1000) {
            k= Math.round(parseInt(k)/1000)+'k'
        }
        return k
    }
    return (    
        <div className='_924w_293we3_3iwe'>
            <img className='_49we_28we_3we' src={props.image} alt={`cat't display`} />
            <div className='fjosadkfjdsfdssd'>
                <div className='sbclskmdnfd'>
                    {props.question} Qs
                </div>
                <div className='sjkdakldkvcx'>
                    {numberToK(props.number_of_users)} play 
                </div>
            </div>
        </div>
    )
}
const t1= <div className='_wei_238iew_932w'><div className='_23wie_329wei_3we'>Practive</div></div>

const R= (props)=> {
    return (
        <div className={props.className}>
            <button className='_394ernjd_39iwe_493dsask' style={props.style}>
                <span className='_32ew_32ewo_594tida'>{props.title}</span>
                <span className='_ewkmsd_294we_32we'>{props.icon}</span>
            </button>
        </div>
    )
}
export const i1= <FontAwesomeIcon icon={faPlay} />
const i2= <FontAwesomeIcon icon={faUsers} />
const Q= (props)=> {
    return (
        <div className='_23we_49w_483ir_439w'>
            <NavLink className='kjddsfddfkds' to={`/join/quiz/${props.id_question}/start`} >
                <R className='jldsfklnjfsfd' style={{backgroundColor: '#00c985'}} title="Pratice" icon={i1} />
            </NavLink>
            <R className='jdsferujfdmlkds' style={{backgroundColor: '#8854c0'}} title="Challenge Friends" icon={i2} />

        </div>
    )
}
const W22= (props)=> {
    return (
        <div className='_123wds_932wei_93wej'>
                {t1}
            {/* author and classify below here */}

            {/* author and classify above here  */}
            {/* like hr */}
            <div className='_w9e_39we_39we_39we'>
                Classify: <span className='sdkmdslfasd' style={{fontWeight: 600}}>{props.classify}</span>
            </div>
            {/* level below here */}
            <div className='_932we_29w_249w_249wrs'>
                <div className='_jdsmdjs_jdssa'>Level: {props.level}</div>
                
            </div>
            {/* button */}
            <Q id_question={props.id_question} />

        </div>
    )
}
export const i3= <FontAwesomeIcon icon={faShareAlt} />
const i4= <FontAwesomeIcon icon={faTimes} />

const W112= (props)=> {
    return (
        <div onClick={props.display} className={`${props.className} ${props.classNameSpecial}`} >
                <span className='_wjsd_429we_3293' onClick={props.isState}>
                    {props.icon}
                </span>
                <span className='_ewj_9we_qwa'>{props.title}</span>

            </div>
    )
}


const W13= (props)=> {
    return (
        <div className='_3fs_49eu_38420qei'>
            <W112 className='_382_wqjij_39qwska' title='Share' icon={i3} />
            <W112 isState={props.isState} classNameSpecial={props.classNameSpecial} display={props.display} className='_2qewkp_3iwek_329ekw' icon={i4} />
        </div>
    )
}
export const Ww= (props)=> {

    // props.onClick
    const userRef= useRef(null)
    const [state, setState]= useState(true)
    useEffect(()=> {
        document.addEventListener('click', handleClick)
        document.querySelector("body").style.overflow= "hidden"
        
        return ()=> {
            document.removeEventListener('click', handleClick)
            document.querySelector("body").style.overflow= "auto"

        }

    })
    const handleClick= (e)=> {
        if(userRef.current && !userRef.current.contains(e.target)) {
            setState(!state)
            console.log('saksa')
        }
    }

    return (
        <React.Fragment>
            {state &&
                <div className='_jfsds_ejds_8wei' ref={userRef} onClick={(e)=> (handleClick(e))}>
                    <div className='_dskmdk_dsmsa'>
                        <W11 question={props.question} image={props.image} number_of_users={props.number_of_users}/>
                        <W22 id_question={props.id_question} level={props.level} classify={props.classify}/>
                        <W13 isState={props.isState} classNameSpecial={props.classNameSpecial} display={props.display } />
                    </div>
                </div>
            }
        </React.Fragment>

    )

}

const V2= (props)=> {
    const [warm, setWarm]= useState([])
    const [rodri, setRodri]= useState(false)
    
    const sendQuiz= async ()=> {
        await axios({
            url: `http://localhost:4000/gettopic/${props.id}`,
            method : 'post',
            
        }).then(res=> (setWarm(res.data[0])))
        .then(()=> setRodri(true))
    }
    const makeMagic= ()=> {
        setRodri(false)
    }
    const notMagic= ()=> {
        setRodri(true)  
    }
    return (
        <React.Fragment>
            <div onClick={sendQuiz} className={props.className} style={props.style}>
                
                    <div className='_75jsd_94w_4weji_ew _904wed_3290wei_329wei' >
                        <X1 number_of_users={props.number_of_users}  backgroundImage={props.image} question={`${props.question}Qs`}/>
                        <X2 title={props.title} />
                        <X3 accuracy={`${props.accuracy || props.percent} % accuracy`} />
                        <X4 />
                    </div>
            </div>
            {(rodri===true) ? <Ww display={makeMagic} id_question={warm['id_questions']} 
            question={warm['question']} notdisplay={notMagic} 
            number_of_users={warm['number_of_users']} classify={warm['classify']} 
            level={warm['level']} image={warm['image']} summary={warm['summary']} /> 
            : 
            ''}
        </React.Fragment>
    )
}

export const V= React.memo((props)=> {
    //eslint-disable-next-line
    const [data, setData]= useState([])
    const [display, setDisplay]= useState(true)
    useEffect(()=> {
        const getData= async ()=> {
            await axios({
                url: 'http://localhost:4000/active-recently',
                method: 'GET',
                params: {
                    id_user: cookies.get('quizA')
                }
            })
            .then(res=> {
                if(res.data[0] !== undefined && res.data[0] !== null ) {
                    setData(res.data[0])
                }
                else {
                    setDisplay(!display)
                }
            })
        }
        getData()
        return ()=> {
            setData([null])
        }
    },[])
    const [disabled, setDisabled]= useState(true)
    return (
        <React.Fragment>
            {display &&
            <div className='_39a_83dj_2uqws'>
                <V1 disabled={disabled} title='active recently'/>
                <V2 id={data.id_question} question={data.question} title={data.summary} 
                image={data.image} className='_93qdks_39wei_39weods fdswqerfghfds'
                percent={data.percent_question} id_question={data.id_question2} />
            </div>
            }
        </React.Fragment>
    )
})

const style= {
    style1: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '16px'
    }
}

const W= React.memo((props)=> {
    
    const [subject1, setSubject1]= useState([])
    useEffect(()=> {
        const getData= async ()=> {
            await axios.get(`http://localhost:4000/subjects/${props.data}`)
            .then(res=> setSubject1(res.data))
        }
        getData()
        return ()=> {

            setSubject1([])
        }
     // eslint-disable-next-line 
    },[])

    return (
        <div className='_348i_349iwek_i3erkd'>
            <V1 title={props.topicsName} linkTo={props.data} seemore='See more'/>
            <div className='_sdmk_kfspd_dksa' style={{width: '100%',display: 'flex',flexDirection: 'row'}}>
             
                
                {subject1.map(item=> <V2 key={uuidv4()} id={item.id} id_question={item.id_questions} image={item.image} question={item.question} title={item.summary} accuracy={item.accuracy} number_of_users={item.number_of_users} className='_u32w_329iek_3uewj' style={style.style1}/>)}
            </div>
        </div>
    )
})
//
const topics= [{title: 'Mathematics',data: 'mathematics'},{title: 'English and Language Arts',data: 'englishandlanguagearts'},{title: 'Social Studies', data: 'socialstudies'},{title: 'World Languages',data: 'worldlanguages'},{title: 'Science',data: 'science'},{title: "Computer Science and Skills", data: 'computerscienceandskills'},{title: 'Career and Technical Education',data: 'careerandtechnicaleducation'},{title: 'Creative Arts',data: 'creativearts'}]
//

const A= React.memo((props)=> {
    // const location= useLocation()
    // console.log(location)
    const user3= useContext(UserSelect3)
    const user2= useContext(UserSelect2)
    const [show1, setShow1]= useState(false)
    const [avatar, setAvatar]= useState(false)
    useEffect(()=> {
        document.title= 'Home - Quiz'
    })
   
    const showStoreAvatar= ()=> {
        setShow1(!show1)
    }
    const pickAvatar= ()=> {
        setAvatar(!avatar)
    }
    
    return (
        <Suspense fallback={<Loading />}>
            <React.Fragment>
                <div className='_wjdskl_w9eik_woek324'>
                    <K displayAvatar={avatar} pickAvatar={showStoreAvatar} />
                    {show1 && <S detect={props.detect} nameAvatar={props.nameAvatar} infoAvatar={props.infoAvatar} avatarDefault={user2} id_unique={user3}  pickAvatar={pickAvatar} closeS={showStoreAvatar} className='dkdmskdds sdjasasas' className2='skasiwoaejdjiowe' className3='daskmasfadssd'/>}
                    
                    <V />
                    {topics.map(item=> <W key={uuidv4()} topicsName={item.title} data={item.data}/>)}
                </div>
                
            </React.Fragment>
        </Suspense>
    )
})



// text

// classes component
const D= (props)=> {
    useEffect(()=> {
        document.title= 'Classes - Quiz'
    })
    return (
        <div className='_ddjis_sjd_308weij'>
            <div className='_9wie_094wie_239iws'>
                <img src={"https://cf.quizizz.com/img/empty-state/empty-state-generic.png" || "https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a"} alt="can't display" />
            </div>
            <br />
            <div className='_49w_4weids_wjies'>
                <div className='_409idw_2983jew_28iew'>You haven't joined any classes yet.</div>
                <div className='_dns_w39iwe_230wiej'>Quiz is more fun with friends.</div>
            </div>
            <br />
            <div className='_39ew_23i9wksd_23ujewm'>
                <B1 navLink='/' className='_23wkdsm_ajmkd_328uqjw' nameButton="Join a Class"/>
            </div>
        </div>
    )
}
const B21= (props)=> {

    return (
        <NavLink className={props.classNameSpe} to={props.navLink} onClick={props.handleChange}>
            <div className={props.className}>
                <div className={props.className2}>
                    {props.title}
                </div>
            </div>
        </NavLink>
    )
}

const item3= [{navLink: 'settings' ,title: 'settings'},{navLink: '/',title: 'login'},{navLink: '/',title: 'signup'}]
const item4= [{navLink: 'settings', title: 'settings'},{navLink:'/join/logout',title: 'logout'}]
const B2= React.memo((props)=> {
    
    
      
    const [show, setShow]= useState(false)
    
    $(window).on('click', function() {
        setShow(false)
    })

    const handle= (e)=> {
        setShow(!show)
        e.stopPropagation()
    }
    
    

    
    return (
        <div className={props.className}>
            <div className={props.className2} onClick={(e)=> handle(e)} >
                {/* show bars or times */}
                {show ? i4 : o }
            </div>
            {/* show box */}
            {show && <div className={props.className3}>
                <B21 key={uuidv4()} navLink='/join/editprofile' title={props.accountName} classNameSpe='fafjsghdfjcesd dsfgsdrfgfdfg' className='fjdsjowesd dsfgsdrfgfdfg' className2='fdsdjnsfejnds sdjdljkdfdsdsddffd'/>
                {props.item.map(item=> <B21 key={uuidv4()} navLink={item.navLink} title={item.title} classNameSpe='fafjsghdfjcesd' className='fjdsjowesd' className2='fdsdjnsfejnds'/>)}
            </div>}
        </div>
    )
})





const H= React.memo((props)=> {  
    const submenu= [ {link:'home',icon: faHome, title: 'Home',component: <A />},{link:'activities',icon: faHistory, title: 'History',component: <BA />},{link:'classes',icon: faUsers, title: 'Classes',component: <D />},{link: 'competitor/game', icon: faGamepad,title: 'Game' ,component: <QF />}, {link: 'friends', icon: faUserFriends, title: 'Friends', component: <Friends />} ]
    const user= useContext(UserSelect)
    return (
        <React.Fragment>
            <div className='_4w98ie_3904io_4309w'>
                <div className='_dslkjdsd_9we_q93'>
                    <div className='_sjd_ksd_smkdm'>
                        <div className='_ijfsk_ew8ej3'>
                            <div className='_djs_sdjsd_93we'>
                                <NavLink className='_skd_9weDsk_wweok' to='/join'>
                                    <h1 className='_disd_sdjs_34w'>Quiz</h1>
                                </NavLink>
                            </div>
                            <div className='_sjkds_sdkms_w8ejisd'>
                                <div className='_djskd_dskd_0eik'>
                                    <input type="text" className='_sjdsd_dsdijs_98wuej' placeholder='Search quiz'/>
                                </div>
                                <div className='_9wkds_09we_3wsd'>
                                    {i} 
                                </div>
                            </div>
                        </div>
                        <div className='_ksdmsd_832jw_894jr'>
                            {/*  */}
                            {// eslint-disable-next-line
                                submenu.map(item=>  <NavLink className={({ isActive }) => isActive ? "active": ''} key={uuidv4()} className='_dsmdks_dskd_q83uja' to={item.link}><div className='_jisk_uwejids328_38ejwi'><div className='sjn_930iew_q93wk'><FontAwesomeIcon icon={item.icon}/></div><div className='_wned_29iwek_329wk'>{item.title}</div></div></NavLink>)}
                        </div>
                    </div>
                    <div className='_skdmsd_w8ueji_w0ueji'>
                        {user===null ?  
                        <React.Fragment>
                            <B1 className='_skdm_Dksd_jsidoew _jsdns_aiojas_ajs' nameButton='Log in' navLink='/'/>
                            <B1 className='_dndjsd_skldds_sdm _jsdns_aiojas_ajs' nameButton='Sign up' navLink='/' />
                            <B2 className='_9i_w9eik_dks' className2='_39ew_3ujwe_rsdsas' className3='jhfnjgsjdfnsd' item={item3} />    
                        </React.Fragment>
                        : 
                        // this is we need
                        <React.Fragment>
                            <B1 className='_dndjsd_skldds_sdm _jsdns_aiojas_ajs' nameButton='Create quiz' navLink='/join/create/quiz' icon={m} />
                            <B2 accountName={props.accountName} className='_9i_w9eik_dks' className2='_39ew_3ujwe_rsdsas' className3='jhfnjgsjdfnsd' item={item4} />
                        </React.Fragment>
                        }
                    </div>
                </div>
            </div>
            <div className='_09euwid_0_irj04w0'>

            </div>
        </React.Fragment>
    )
})

const UserSelect= createContext()
const UserSelect2= createContext()
const UserSelect3= createContext()
const T= (props)=> {

    const [user, setUser]= useState(null)   
    const [avatar, setAvatar]= useState(null)
    const [nameAvatar, setNameAvatar]= useState(null)
    const [infoAvatar, setInfoAvatar]= useState(null)
    const [updateAvatar, setUpdateAvatar]= useState(null)
    const [firstName, setFirstName]= useState(null)
    const [surName, setSurName]= useState(null)
    const [account, setAccount]= useState(null)    
    const [detect, setDetect]= useState(false)
    const [grade, setGrade]= useState(null)
    const isDetect= ()=> {
        setDetect(!detect)
    }
    useEffect(()=> {
        const getUser= async ()=> {
            if(cookies.get('quizA')) {
                await axios({
                    url: 'http://localhost:4000/login/success',
                    method: 'post',
                    data: {
                        cookies : cookies.get('quizA')
                    }
                }).then(res=> { setUser(`${res.data[0].firstName} ${res.data[0].surName}`)
                    setAvatar(res.data[0].avatar)
                    setUpdateAvatar(res.data[0].id_unique)
                    setNameAvatar(res.data[0].name_avatar)
                    setInfoAvatar(res.data[0].info_avatar)
                    setFirstName(res.data[0].firstName)
                    setSurName(res.data[0].surName)
                    setAccount(res.data[0].account)
                    setGrade(res.data[0].grade)
                })
            }
            else {
                return 
            }
            
        }
        getUser()

    },[detect])
    
    
    const item= ['mathematics','englishandlanguagearts','socialstudies','worldlanguages','science','computerscienceandskills','careerandtechnicaleducation','creativearts']
    const submenu= [ {link:'home',icon: faHome, title: 'Home - Quiz',component: <A nameAvatar={nameAvatar} infoAvatar={infoAvatar} detect={isDetect}/>},{link:'activities',icon: faHistory, title: 'History - Quiz',component: <BA />},{link:'classes',icon: faUsers, title: 'Classes - Quiz',component: <D />} ]
    
    
    return (
        <UserSelect3.Provider value={updateAvatar} >

            <UserSelect2.Provider value={avatar}>
                
                <UserSelect.Provider value={user}>

                    <div className='_92roew_392ydsmas_40wids'>

                        <H accountName={account} />
                        <div className='_9fji_9032iwed_390wiejs'>
                            
                                <Suspense fallback={<Loading />}> 
                                    
                                        
                                            <Routes>
                                                {submenu.map(item=> <Route key={uuidv4()} path={`/${item.link}/*`} element={<Suspense fallback={<Loading />}>{item.component}</Suspense>}/>)} 
                                                <Route path='/' element={<Navigate to='/join/home' />}/>
                                                <Route path='activities/*' element={<Suspense fallback={<Loading />}><BA /></Suspense>} />
                                                <Route path='/logout' element={<Suspense fallback={<Loading />}><L className='ffbdfbfdfddfsd' /></Suspense>} />
                                                {/* <S nameAvatar={props.nameAvatar} infoAvatar={props.infoAvatar} avatarDefault={user2} id_unique={user3}  pickAvatar={pickAvatar} closeS={showStoreAvatar}  */}
                                                <Route path='/editprofile' element={<Suspense fallback={<Loading />}><E detect={isDetect} className='hsjdklsfdjs' firstName={firstName} surName={surName} nameAvatar={nameAvatar} accountName={account} id_unique={updateAvatar} grade={grade} /></Suspense>} />
                                                {/*  */}
                                                {item.map(item=> <Route key={uuidv4()} path={`/${item}`} element={<Suspense fallback={<Loading />}><Xe /></Suspense>} />)}
                                                <Route path='/quiz/*' element={<Suspense fallback={<Loading />}><F className='fkdlfklvfkccv' /></Suspense>} />
                                                
                                                <Route path='/game/*' element={<Suspense fallback={<Suspense fallback={<Loading />}><Index className='dffdsefddfsdsfd'
                                                className1='dfdbdesfdgbsd' className2='dfbvsdaesfdgfvas' /></Suspense>}><Gs className='fduyshdjkds' /></Suspense>} />
                                                <Route path='/create/quiz/*' element={<Suspense fallback={<LoadingCreateQuiz />}><AS /></Suspense>} />
                                                <Route path='/competitor/*' element={<Suspense fallback={<Loading />}><QF /></Suspense>} />
                                                <Route path='/friends' element={<Friends user={cookies.get('quizA')} />} />
                                            </Routes>
                                </Suspense>
                        </div>
                    </div>
                </UserSelect.Provider>
            </UserSelect2.Provider>
        </UserSelect3.Provider>


    )
}
export default React.memo(T)
