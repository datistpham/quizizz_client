import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import Loading from './CountDown/Loading'
import { Ww } from './Index'
// title
const P= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <div className={props.className2}>{props.popular}</div>
                <div className={props.className3}>{props.title}</div>
            </div>
        </div>
    )
}

// content
const G11= (props)=> {
    return (
        <div className={props.className}>
            <img draggable='false' className={props.className2} src={props.image} alt="can't play" />
        </div>
    )
}

const G12= (props)=> {
    return (
        <div className={props.className}>
            {props.summary}
        </div>
    )
}

const G1= React.memo((props)=> {
    // const location= useLocation()
    // console.log(location.pathname)
    const [state, setState]= useState(false)
    const isState=()=> {
        setState(true)
    }
    const isState1= ()=> {
        setState(false)
    }
    return (
        <div className={props.classNameMain}>
            <div className={props.className} onClick={isState}>
                <div className={props.className2}>
                    <div className={props.className3}>
                        <G11 className='_e328uj_9wie_93qiwe' className2='hsdiujdnajr' image={props.image}/>
                        <B players='players'  className='jodjaoewjd' className1='disjdsdjsdds' question={props.question} qs='Qs' number_of_users={props.number_of_users} />
                    
                    </div>
                    <G12 className='ufnfdzwejs' summary={props.summary} />
                </div>
            </div>
            {state && <Ww isState={isState1} classNameSpecial='fkdldfccxkjdffs' 
            image={props.image} number_of_users={props.number_of_users} 
            question={props.question} id_question={props.id_question}
            classify={props.classify} level={props.level}/>}
        </div>
    )
})

const R= (props)=> {
    const location= useLocation()
    // eslint-disable-next-line
    const [path, setPath]= useState(location.pathname)
    const [data, setData]= useState([])
    useEffect(()=> {
        const getData= async ()=> {
            await axios({
                url: `http://localhost:4000/restof${path}`,
                method: 'get',
            })
            .then(res=> setData(res.data))
        }
        getData()
    // eslint-disable-next-line
    },[]) 
    return (
        <React.Fragment>
            {data.map(item=> <G1 key={uuidv4()} classNameMain='fiofdjdgheend' 
            className='_32u8e_309ewid_iw9ekd' className2='_w49ei_iref_49iwj_3ie' 
            className3='nfksjdmxsjefd' image={item.image} question={item.question} 
            summary={item.summary} number_of_users={item.number_of_users}
            author={item.author} level={item.level} classify={item.classify}/>)}
        </React.Fragment>
    )
}
// all content

const G= (props)=> {
    return (
        <div className={props.className}>
            {props.data.map(item=> <G1 key={uuidv4()} classNameMain='fiofdjdgheend' 
            className='_32u8e_309ewid_iw9ekd' 
            className2='_w49ei_iref_49iwj_3ie' className3='nfksjdmxsjefd'
            seeAll={props.seeAll} image={item.image} summary={item.summary} 
            question={item.question} number_of_users={item.number_of_users}
            level={item.level} classify={item.classify} id_question={item.id_questions} />)}
            {props.seeAll && <R />}
            
        </div>
    )
}
// button see all

const B= (props)=> {
    const numberToK=(k)=> {
        if(parseInt(k)>1000) {
            k= Math.round(parseInt(k)/1000)+'k'
        }
        return k
    }
    return (
        <div className={props.className}>
            <button onClick={props.seeAll} className={props.className1}><span className='_49iwe_4wei_30od'>{(props.title) ? 'See less' : 'See all'}</span>{props.question}{props.qs}</button>
            <div className='vdjsdmklasdvn disjdsdjsdds'>{numberToK(props.number_of_users)} {props.players}</div>
        </div>
    )
}

const Xe= (props)=> {
    const location= useLocation()
    const path= location.pathname.split('/')[2]
    // eslint-disable-next-line 
    const [param, setParam]= useState(path)
    const [title, setTitle]= useState(path)
    const [nan, setNan]= useState(false)
    const [data, setData]= useState([])
    useEffect(()=> {
        if(title==='mathematics') {
            setTitle('Mathematics')
        }
        else if(title==='englishandlanguagearts') {
            setTitle('English And Language Arts')
        }
        else if(title==='socialstudies') {
            setTitle('Social Studies')
        }   
        else if(title==='worldlanguages') {
            setTitle('World Languages')
        }
        else if(title==='science') {
            setTitle('Science')
        }
        else if(title==='computerscienceandskills') {
            setTitle('Computer Science And Skills')
        }
        else if(title==='careerandtechnicaleducation') {
            setTitle('Career And Technical Education')
        }
        else if(title==='creativearts') {
            setTitle('Creative Arts')
        }
        axios({
            url: `http://localhost:4000/topics/all/${path}`,
            method: 'get',

        }).then(res=> setData(res.data))

        return ()=> {
            setData([])
        }
        // eslint-disable-next-line
    },[])
    useEffect(()=> {
        document.title= title   
    })
    const changeNan= ()=> {
        setNan(!nan)
    }
    
    return (
        <Suspense fallback={<Loading />}>
            <div className='_498we_4iweks_4uwjre'>
                <P className='_32we_53ire_49i0te' className1='_4wikc_39qe_4iwek' className2='_39we_4wfvd_392qdms' className3='_3wer_4uwije_94i3we' popular='Popular question for: ' title={title} />
                <G data={data} className='_32i_4uwj_239e' seeAll={nan}/>
                <B seeAll={changeNan} className='_49iteo_4290we_32i9' className1='_kds_wuej_ewji' title={nan} />
            </div>
        </Suspense>
    )
}
export default React.memo(Xe)