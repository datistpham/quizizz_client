import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { faHourglassHalf, faHourglassEnd, faFileAlt, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {v4 as uuidv4} from 'uuid'
import Loading from './CountDown/Loading';
const G= lazy(()=> {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../ActivityCompleted/Index')), 500)
    })
  })
// const I1= <FontAwesomeIcon icon={faHourglassHalf} />
// const I2= <FontAwesomeIcon icon={faHourglassEnd} />
// const I3= <FontAwesomeIcon icon={faFileAlt} />

// Section content
const V= (props)=> {
    return (
        <React.Fragment>
            <div className={props.className}>
                <div className={props.className1}>
                        {props.categories}
                </div>
            </div>
        </React.Fragment>
    )
}
const style= {
    style1: {
        fontSize: 24
    },
    style2: {
        width: 225,
        height: 200,
        objectFit: 'cover'
    },
    style3: {
        backgroundColor: '#ffffff',
        color: '#8854c0',
        height: 36,
        padding: '0 18px',
        boxShadow: '0 4px 0 0 #e7e7e7,0 4px 0 0 rgba(0,0,0,.09)',
        border: '1px solid #e7e7e7',
        borderRadius: '8px',
        fontWeight: 600
    },
    style4: {
        backgroundColor: '#ffffff',
        color: '#8854c0',
        padding: '0 18px',
        boxShadow: '0 4px 0 0 #e7e7e7,0 4px 0 0 rgba(0,0,0,.09)',
        border: '1px solid #e7e7e7',
        borderRadius: '8px',
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        height: 40
    },
    style5: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#fff',
        color: "#8854c0",
        fontWeight: 600,
        cursor: 'pointer'
    }
}
const t= (
    <div className='_dsds_9iwe-weids' style={style.style1}>Looks like you don't have any game happening</div>
)
const i= (
    <div className='_sskds-23_4ker_weds'>
        <img draggable='false' src='https://cf.quizizz.com/game/img/ui/activity_empty-state%402x.png' alt='cant display' style={style.style2}/>
    </div>
)
const b= (
    <div className='_djds_w9eid-dscsd'>
        <button style={style.style3}>Find quiz</button>
    </div>
)

const item1= [t,i,b]
const Co= (props)=> {
    return (
        <div className='_ddds_dsdjns_329iesd'>
            <div className='_9weis_293iwe_iewa'>
                {props.item.map(item=> <V key={uuidv4()} className={props.className} className1={props.className1} categories={item}/>)}
            
            </div>
        </div>
    )
}


const XX= ()=> {
    useEffect(()=> {
        document.title= 'My Running Activities - Quiz'
    })
    return (
        <React.Fragment>
            <Co item={item1} className='_dsjdk_49wie_3wei' className1='wjisk_ewdksc_9iweks' />
        </React.Fragment>
    )
}

const t1= (
    // eslint-disable-next-line
    <div className='_dsds_9iwe-weids' style={style.style1} >You've not created quiz yet!</div>
)
const i1= (
    <div className='_sskds-23_4ker_weds'>
    
        {/* eslint-disable-next-line */}
        <img draggable='false' src='https://cf.quizizz.com/game/img/misc/create_illustration.png' alt='cant display' style={style.style2}/>
    </div>
)
const b1= (
    // eslint-disable-next-line
    <div className='_djds_w9eid-dscsd' style={style.style4} >
        <div className='_93we_uwejsd_39wei'>
            <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <button style={style.style5}>Create quiz</button>
    </div>
)
const item2= [i1,t1,b1]

const XX1= (props)=> {
    useEffect(()=> {
        document.title= 'My Created Quizzes - Quiz'
    })
    return (
        <React.Fragment>
            <Co item={item2} className='_dsjdk_49wie_3wei' className1='wjisk_ewdksc_9iweks'/>
        </React.Fragment>
    )
}

//



const item= [{state: 'running', icon: faHourglassHalf, navLink: 'running',component: <XX />}, {state: 'completed', icon: faHourglassEnd, navLink: 'completed',component: <Suspense fallback={<Loading /> }><G className='_39wie_49wei_49wei'/></Suspense>}, {state: 'create', icon: faFileAlt, navLink: 'create',component: <XX1 />}]
const C11= (props)=> {
    return (
        // eslint-disable-next-line
        <NavLink to={props.navLink} className={({ isActive }) => isActive? "active1": ''}  >
            <div className='_sdsk_329we_4iw'>
                <div className='_dds-w49-9w0e_ewi9'>
                    {props.title}
                </div>
                <div className='_dsksd-4wejs_wesds'>
                    <FontAwesomeIcon icon={props.icon} />
                </div>
            </div>
        </NavLink>
    )
}

// Header   
const B11= (props)=> {
    return (
        <div className='_9we_3iw9e_94iwek'>
            <div className='_sdk_kfd_skass'>
                {item.map(item=> <C11 key={uuidv4()} navLink={item.state} className='_skds_3ie_329iwekds' title={item.state} icon={item.icon} />) || ''}
            </div>
        </div>
    )
}
// section content



const BA = (props) => {
    
    return (
        <div className='_3dsk_329iwe_3iewkds jhgfdsfghjgfdse_4we'>
            <B11 />
            <Routes>    
                {item.map(item=> <Route key={uuidv4()} path={`/${item.navLink}`} element={item.component} />)}
                <Route path='/' element={<Navigate to='/join/activities/completed' />} />
                <Route path='*'  element={<div>404 Not Found</div>} />
            </Routes>
        </div>
    );
}

export default React.memo(BA)
