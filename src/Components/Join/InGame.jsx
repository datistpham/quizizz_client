import axios from 'axios'
import React, { useState, useEffect, createContext, Suspense } from 'react'
import { memo } from 'react'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { i3,j,id5,id6,id7,id8,id9, id10, id11,d,id12 } from './Index'
import { v4 as uuidv4 } from 'uuid'
import $ from 'jquery'
import { useContext } from 'react'
import Loading from './CountDown/Loading'
import Main14S from '../Staticstics/Index'

const ButtonInGame1= (props)=> {
    return (
        <div className={props.className}>
            <button className={props.className2} onClick={()=> {props.onClick1();props.onClick2()}}>
                <div className={props.className1}>
                    {props.component}
                    {props.icon}
                    <span className='dsfvsdsfsadsas'>{props.number_of_coin}</span>
                    <span className='bhfdsjdsfgfdsed'>{props.currentQuestion}</span>
                    
                    <span className='ihwjokposdfjdks'>{props.divide} {props.numberOfQuestion}</span>
                    {props.classify}
                    {props.coin}
                </div>
            </button>
        </div>
    )
}
const Coin= ()=> {
    return (
        <div className='fgfwesrfdgdwefdgfdesd'>0</div>
        
    )
}
const InGame1= memo((props)=> {
    const [icon, setIcon]= useState(true)
    const isFullScreen= ()=> {
        setIcon(!icon)
    }
    $(document).keydown(function (event) {
        if (event.keyCode === 122) { // Prevent F11
            if(icon) {
                setIcon(!icon)
            }
            else {
                setIcon(!icon)
            }
        } 
    })
    const handleClick= ()=> {
        if(icon) {
            document.querySelector(".fduyshdjkds").requestFullscreen()
        }
        else {
            document.exitFullscreen()
        }
    }
    return (
        <div className={props.className}>
            
            <div className={props.className1}>
                <div className='fbihdsojfvbndsf'>
                    <ButtonInGame1 className='arjfsdasd ejidkmlaps' 
                    className1='iasjasakska dsdsddwsak gfdfgbvdsfvg' 
                    className2='sdokfmdsls' icon={id6}
                    />
                    <ButtonInGame1 className='arjfsdasd ejidkmlaps' 
                    className1='iasjasakska dsdsddwsak gfdfgbvdsfvg' 
                    className2='sdokfmdsls' currentQuestion={props.currentQuestion}
                    numberOfQuestion={props.numberOfQuestion} 
                    divide='/'
                    />
                </div>
                {/*  */}
                
                {/*  */}
                <div className='ydsioidksdascs'>
                    <ButtonInGame1 className='arjfsdasd ejidkmlaps' 
                    className1='iasjasakska dsdsddwsak bfdggdesrfdg' 
                    className2='sdokfmdsls' icon={id8}
                    />
                    <ButtonInGame1 className='arjfsdasd ejidkmlaps gfnfdrsfdgnfdefdgb' 
                    className1='iasjasakska dsdsddwsak dffdsffdsfgds dsbvsfddsvdsfsa' 
                    className2='sdokfmdsls anbwegfdwedgfxdz' component={<Coin />} icon={id7} number_of_coin
                    />
                    
                    <ButtonInGame1 className='arjfsdasd ejidkmlaps' 
                    className1='iasjasakska dsdsddwsak dbedfgbdsfg' 
                    className2='sdokfmdsls dbvwsfvfsesdfvcds' icon={icon ? j : id5} onClick1={isFullScreen} onClick2={handleClick}
                    />    
                </div>

            </div>
        </div>
    )
})
/// ///  ///  ///   ///  ///  // ///  ///   ////   ////  ///  // //  / /
const InGame21= memo((props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <p className={props.className2}>{props.question}</p>
            </div>
        </div>
    )
})
const Notification= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <p className={props.className2}>{props.notification}</p>
            </div>
        </div>
    )
}

const InGame221= memo((props)=> {
    
    const location= useLocation()
    const [state, setState]= useState(100)
    const [coin, setCoin]= useState(()=> 2000)
    const [danger, setDanger]= useState('')
    const [opp, setOpp]= useState(false)
    const Timers= ()=> {setTimeout(()=> {   
        setState(state- 2/30)
    },1)}

    const Timers2= ()=> setTimeout(()=> {
        setCoin((coin)=> coin-0.25)  
    },1)
    
    useEffect(()=> {
        
        if(state<=0.1) {
            return [setState(0),setCoin(600)]
        }
        
        Timers()
        Timers2()
        if(opp) {
            clearTimeout(Timers)
            clearTimeout(Timers2)

        }
        if(state>=20 && state<=40) {
            
            setDanger('#efa929')
        }
        else if(state < 20) {
            setDanger('#ec0b43')
        }
        
        else if (state<= 0.06 ) {
            clearTimeout(Timers)
            clearTimeout(Timers2)

            return ()=> {
                setState(0)
                setCoin(600)
                clearTimeout(Timers)
                clearTimeout(Timers2)

            }
        }
    },[state,opp])
    const isOpp= ()=> {
        setOpp(true)
        setTimeout(()=> {
            $(".dfsdsdfdsfsdas").css({"display":"none"})
        },150)
    }
    
    const memo= useMemo(()=> location.pathname,[location.pathname])
    const [open, setOpen]= useState(null)
    const [correctAnswer, setCorrectAnswer]= useState(0)
    const [wrongAnswer, setWrongAnswer]= useState(0)
    const checkAnswer= async (e)=> {
        $(".dfdjmkdlskds").addClass('dsdfsdfsdfsdsfsdas')
        await axios({

            url: `http://localhost:4000/checkanswer/${props.sendAnswer}/${props.choose}`,
            method: 'POST',
            data: {
                question: memo.split('/')[3]
            }
        })  
        .then(res=> {
            if(res.data=== 'correct') {
                setCorrectAnswer((correctAnswer)=> correctAnswer+1)
                setOpen(true)
                $(".fgfwesrfdgdwefdgfdesd").html(parseInt($(".fgfwesrfdgdwefdgfdesd").html())+parseInt(coin))
                
                axios({
                    url: 'http://localhost:4000/result_answer',
                    method: 'get',
                    params: {
                        user: location.state.user,
                        result: true,
                        nth_question: props.sendAnswer,
                        id_question: location.pathname.split('/')[3],
                        coin: $(".fgfwesrfdgdwefdgfdesd").html(),
                        text: 'true',
                        time: parseInt(parseInt(state)/10 * 2/3)

                    }    
                })
            }
            else {
                setWrongAnswer((wrongAnswer)=> wrongAnswer+1)
                setOpen(false)
                axios({
                    url: 'http://localhost:4000/result_answer',
                    method: 'get',
                    params: {
                        user: location.state.user,
                        result: false,
                        nth_question: props.sendAnswer,
                        coin: $(".fgfwesrfdgdwefdgfdesd").html(),
                        id_question: location.pathname.split('/')[3],
                        text: 'false',
                        time: parseInt(parseInt(state)/100 * 1500)
                    }    
                })
            }
        })

    }
    
    return (
        
            
            <React.Fragment>
                {opp=== false ? <div className={props.classNameSpe}>
                    <div className={props.classNameSpe2} style={{width: `${state}%`,backgroundColor: `${danger}`}}></div>
                </div> : ""}
                
                <div className={props.className}>
                    
                    <div className={`${props.className3}`} onClick={()=> {checkAnswer();props.triggerAnswer();isOpp()}}>
                        <div className={`${props.className4} ${open!==null ? open===true ? 'fdsdssdfdds' : 'fdfewsfdsdf' : '' }`}>
                            <div className={props.className1}>{props.number}</div>
                                {/* answer */}
                            <div className={props.className2}>
                                {props.choose}
                            </div>
                        </div>
                    </div>
                    {/* choose */}
                </div>
                {open && <Notification className='dadsfadssdsds asdfghjk' className1='bdfddsfvdssd' 
                className2='dsvsadsvdsd' notification='Correct' />}
                {open===false && <Notification className='sdsasdsadsds asdfghjk' className1='bdfddsfvdssd' 
                className2='dsvsadsvdsd' notification='Incorrect' />}
            </React.Fragment>
            
    )
})

const InGame22= (props)=> {
    
    const item= [{number: 1, answer: props.choose1, backgroundColor: 'adfdfskmsldd', class: 'dfbdbdsfbdsdsfvc'},{number: 2, answer: props.choose2, backgroundColor: 'dsfgdsretrhgb', class: 'fbsdfbedfgterysa'},
    {number: 3, answer: props.choose3, backgroundColor: 'oiuytrdfgfgd', class: 'edfghfertgjhftdf'},{number: 4, answer: props.choose4, backgroundColor: 'mnbgfvdcsdoiu', class: 'bsfghgjyutydrtr'}]
    return (
        
        <div className={props.className}>
            <div className={props.className1}>
                
                {item.map(item=> <InGame221 key={uuidv4()} className='dsdxcvsdfcvsd' className3='dfdjmkdlskds'
                className1='dfvdsdcvsdc' className4={`dsfjsdmlaaas ${item.backgroundColor}`}
                className2='dsfsadssfjl' number={item.number} choose={item.answer} 
                sendAnswer={props.id} triggerAnswer={props.triggerAnswer}
                classNameSpe={`dfsdsdfdsfsdas`}
                classNameSpe2={`sdsadsfdwasdfs ${item.class}`} />)
                }
            </div>
        </div>
    )
}

const InGame2= React.memo((props)=> {
    
    
    return (
        <div className={props.className}>
            
            <div className={props.className1} >
                <InGame21 className='dscdsdcsfgrsh' className1='gfnkdjmserfo'
                className2='dsfsefdbfrefdg'
                question={props.question.question} />
                <InGame22 className='fdhijnsaas' className1='dsfjksdamad' 
                choose1={props.question.choose1} choose2={props.question.choose2}
                choose3={props.question.choose3} choose4={props.question.choose4} id={props.count} 
                triggerAnswer={props.isCount} />
            </div>
        </div>
    )
})

// // //  //  // //  //  //  / / / / / / // / / / / / / / / / / / / / / / / / /

const InGame311= (props)=> {
    return (
        <React.Fragment>
            <div className={props.className}>
                <button className={props.className1} onClick={()=> {props.onClick();props.isState()}} >
                    {props.icon}
                </button>
                <div className={props.className2}>
                    {props.title}
                </div>
            </div>
        </React.Fragment>

    )
}

const InGame31= memo((props)=> {

    const [state, setState]= useState(false)
    const isState= ()=> {
        setState(!state)
    }
    const handleClick= ()=> {
        if(state=== true) {
            
        }
        else {
        }
    }
    return (
        <div className={props.className}>
            <InGame311 className='dfjsdlsdfd piouiyutyrt' className1='dsdjnxcdszc adffdsfvdscvsd'
            icon={id9} className2='fjfdzoskpofvcjn'  title='Turn off music' onClick={handleClick} isState={isState}
             />
            <InGame311 className='dfjsdlsdfd dbvdsfdgbfdsdf' className1='dsdjnxcdszc dsfvsdvcdcxv'
            className2='fjfdzoskpofvcjn' icon={id10} title='Zoom'/>
        </div>
    )
})

const InGame321= (props)=> {
    return (
        <div className={props.className}>
            <button className={props.className1}>
                <span className={props.className2}>{props.title}</span>
                <span className={props.className3}>{props.icon}</span>
            </button>
        </div>
    )
}

const InGame32= (props)=> {
    return (
        <div className={props.className}>
            <InGame321 className='jjfkdsldfds' className1='scscsssszcd'
            className2='adsvsdsdfs' className3='asnjzdsklds'
            title='Submit' icon={id11} />
        </div>
    )
}
const InGame3= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <InGame31 className='fdujskjsdfdkz' />
                <InGame32 className='dsfjoskpdckasl' />
            </div>
        </div>
    )
}

const UserContext= createContext()

const InGame=memo((props)=> {
    const location= useLocation() // 2

    useEffect(()=> {
        axios({
            url: 'http://localhost:4000/setquestion',
            params: {
                id_user: location.state.user,
                id_question: location.pathname.split('/')[3]
            }
        })
    },[location.state.user,location.pathname])
    useEffect(()=> {
        document.title= 'Playing a Game - Quiz'
    },[])
    console.log(location.state.user)
    const [summary, setSummary]= useState(false)
    
    
    

    useEffect(()=> {
        
        $("body").css({"overflow":"hidden"})
        return ()=> {
            $("body").css({"overflow":"auto"})
        }
    },[])
    $(document).keydown(function (event) {
        if (event.keyCode === 123) { // Prevent F12
            return false
        } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { // Prevent Ctrl+Shift+I        
            return false
        }
    })
    
    const [count, setCount]= useState(1)
    const [question, setQuestion]= useState([]) 
    const isCount= ()=> {
        const countIncrement=()=>  setTimeout(()=> {
            setCount((count)=> count+1)

        },3000)
        countIncrement()
        if(summary) {
            setCount(numberOfQuestion)
            clearTimeout(countIncrement)
            return
        }
    }   
    const resetCount= ()=> {
        setCount(1)
    }
    useEffect(()=> {
        const getQuestion= async ()=> {
            await axios(`http://localhost:4000/number_of_questions/${location.pathname.split('/')[3]}/${count}`)
            .then(res=> {
                if(res.data==='runout') {
                    setSummary(true)
                }
                else {
                    setQuestion(res.data[0])
                }
            })
        }
        getQuestion()
        return ()=> {
            setQuestion([])
        }
    },[count, location.pathname])
    
    const [numberOfQuestion, setNumberOfQuestion]= useState(null) //5
    
    useEffect(()=> {
        axios.get(`http://localhost:4000/number_of_questions/${location.pathname.split('/')[3]}`)
        .then(res=> setNumberOfQuestion(res.data[0]["Count(id)"]))

        return ()=> {
            setNumberOfQuestion(null)
        }
    },[location.pathname])

    const [state, setState]= useState(true)
    useEffect(()=> {
        if(location.state === null || location.state === undefined || location.state === '') {
            setState(false)
        }  

    },
    [location.state, state])
    useEffect(()=> {
        const checkComplete= async ()=> {
            await axios.get(`http://localhost:4000/statics/bar/${location.state.user}/${location.pathname.split('/')[3]}`)
            .then(res=> {
                if(parseInt(res.data.answer_correct)+ parseInt(res.data.answer_incorrect) === numberOfQuestion) {
                    setSummary(true)
                    return 
                }
                else {
                    setSummary(false)
                    return 
                }
            })

        }
        checkComplete()
        
    },[location.pathname, location.state,numberOfQuestion])
    const isSummary= ()=> {
        setSummary(false)
        return
    }
    return (
        <UserContext.Provider value={{value1: numberOfQuestion,value2: isSummary,value3: resetCount}}>

            <React.Fragment>
                {summary===false ? 

                state ? 
                    
                    (
                    <React.Fragment>
                        <Suspense fallback={<Loading />}>

                            <Question className={props.className} count={count} numberOfQuestion={numberOfQuestion}
                            question={question} isCount={isCount}  />                
                        </Suspense>
                        
                        
                    </React.Fragment>
                    )
                        :
                ("404 Not Found")
                    :
                    <Suspense fallback={<Loading />}>
                        <Summary />
                    </Suspense>
                }
            </React.Fragment>
        </UserContext.Provider>

    )
})
export default InGame
// // // // // / / / / / / / / / / / / 
// question
const Question= (props)=> {
    
    
    return (
        <div className={props.className}>        
            <InGame1 className='jfdskalva' className1='fjsdmkaass' currentQuestion={props.count} 
            numberOfQuestion={props.numberOfQuestion}  />   
                <InGame2 className='jdfospkfdjds' className1='vclksdzsd' question={props.question} count={props.count} 
                isCount={props.isCount} />
            <InGame3 className='dsjokmlcxsds' className1='dsdsxfdxoj' />
        </div>
    )
}
// // // // // // // // // // // // // // // // // / / / / 
 // summary
const HeaderSIcon= (props)=> {
    return (
        <div className={props.className} onClick={props.returnHome || props.muteSound}>
            <div className={props.className1}>{props.icon}</div>
        </div>
    )
}

const HeaderS= (props)=> {
    const navigate= useNavigate()
    const returnHome= ()=> {
        navigate("/join/home")
    }
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <div className={props.className2}>
                    <HeaderSIcon className='vcdvxdxcxxc' className1='dfsdvdxdcxc'
                    icon={d} returnHome={returnHome}/>
                    <HeaderSIcon className='vcdvxdxcxxc' className1='dfsdvdxdcxc'
                    icon={id9} />
                    
                </div>
                <div className={props.className3}>
                    <HeaderSIcon className='vcdvxdxcxxc' className1='dfsdvdxdcxc'
                    icon={j}/>
                </div>
            </div>
        </div>
    )
}

const titleS= <div className='vdvcdxvcxdz'>
    Summary
</div>

const Main12S= (props)=> {
    return (
        <div className={props.className}>
            <div className='dsfbadsfdsxs'>
                <div className={props.className1}>
                    {props.title}
                </div>

                <div className={props.className4}>{props.score}{props.coin}</div>    

            </div>
            <div className={props.className2}>
                <div className={`${props.className3} ${props.className5}`}>{props.icons}</div>
            </div>
            
        </div>
    )
}
const ButtonMain12S= (props)=> {
    const userContext= useContext(UserContext)

    return (
        <div className={props.className}>
            <button className={props.className1} onClick={()=> {userContext.value3();userContext.value2();props.isClick()}}>{props.title}</button>
        </div>
    )
}

const Main131S= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className2}></div>

            <div className={props.className1}>
                {props.staticstics}
            </div>
            <div className={props.className3}>
                {props.title}
            </div>
        </div>
    )
}
const Main13S= (props)=> {
    return (
        <div className={props.className}>
            <div className='sadfbdwgfdwe'>
                Performance stats
            </div>
            <div className={props.className1}>
                <Main131S className2='dsfgfgdadsfsa fdgfdsadsazx' className='fsddsadsetd' className1='dsvcasdssasds'
                className3='adsfdwqwregrfdfs' title="Correct" staticstics={props.answer_correct} 
                className4='afdgnfwerfsfsd'/>
                <Main131S className2='dsfgfgdadsfsa dsdssadsawewref'  className='fsddsadsetd' className1='dsvcasdssasds'
                className3='adsfdwqwregrfdfs' title="Incorrect" staticstics={props.answer_incorrect}
                className4='afdgnfwerfsfsd'/>
                <Main131S  className2='dsfgfgdadsfsa yutyrteaszxzx' className='fsddsadsetd' className1='dsvcasdssasds'
                className3='adsfdwqwregrfdfs' title="Seconds / Ques" staticstics={props.time}
                className4='afdgnfwerfsfsd'/>
                <Main131S  className2='dsfgfgdadsfsa ytrtdrseasfdgfh' className='fsddsadsetd' className1='dsvcasdssasds'
                className3='adsfdwqwregrfdfs' title="Trace" staticstics={props.trace}
                className4='afdgnfwerfsfsd'/>
            </div>
        </div>
    )
}
const PercentBar= (props)=> {
    const userContext= useContext(UserContext)
    return (
        <div className={props.className}>
            {/* success */}
            <div className={props.className1} style={{width: `${parseInt(Math.ceil(parseInt(props.width1)/parseInt(userContext.value1)*100))}%`}}>

            </div>
            {/* separate */}
            <div className={props.className2} style={{width: 4,backgroundColor: 'white'}}>
                <div className='fbnvdfsadfghgf'>
                {`${parseInt(Math.ceil(parseInt(props.width1)/parseInt(userContext.value1)*100))}%`}
                </div>
            </div>
            {/* wrong */}
            <div className={props.className3} style={{width: `${parseInt(Math.floor(parseInt(props.width2)/parseInt(userContext.value1)*100))}%`}}>

            </div>
        </div>
    )
}
const Main1S= (props)=> {
    const context= useContext(UserContext)
    const navigate= useNavigate()
    const location= useLocation()
    const [data, setData]= useState([])
    useEffect(()=> {
        axios.get(`http://localhost:4000/statics/bar/${location.state.user}/${location.pathname.split('/')[3]}`)
        .then(res=> setData(res.data))

        return (()=> {
            setData([])
        })
    },[location.pathname,location.state.user])
    const isClick= async ()=> {
        await axios({
            url: "http://localhost:4000/playagain",
            method: 'get',
            params: {
                user: location.state.user,
                question: location.pathname.split("/")[3]
            }
        })

    }
    return (
        <div className={props.className}>
            <Main11S className='sadvdafsdd' className1='dfsdfsadsfsdads'
            className2='dfsadvasvxsad' avatar={props.avatar} />
            <Main12S className='sadvdafsdd dvcdsfdedsfds' className1='dadssadsdakrds' 
            className2='fadffsadsfsads' className5='fdsdvcvsdehgj'
            title="Correct" className4='afdgnfwerfsfsd' score={<PercentBar className='fdddsdvsdvcsd' className1='dsdsdfdvdss' className2='fghghfdsasdsfgvn' className3='hgmjutyrstersdzxcv'
            width1={data.answer_correct} width2={data.answer_incorrect} />}/>
            <Main12S className='sadvdafsdd dvcdsfdedsfds bvdsefgdefdgfs' className1='dadssadsdakrds' 
            className2='fadffsadsfsads' className3='dsasdsdasdsre' coin={data.coin} 
            title="Score" className4='afdgnfwerfsfsd' icons={id7}/>
            <div className='sdcbsefddses'>
                <ButtonMain12S className='fsadsadsfaesa' className1='dsasdsasdssas'
                title='Play again' isClick={isClick}  className4='afdgnfwerfsfsd' />
                <ButtonMain12S className='fsadsadsfaesa' className1='dsasdsasdssas fvsdfbdsgfgdrfdg'
                title='Find new Quiz' className4='afdgnfwerfsfsd' />
            </div>
            <Main13S className='fdsdfdsdfas' className1='fbvsdfdsdfdsa' 
            answer_correct={data.answer_correct} answer_incorrect={data.answer_incorrect} time={Math.ceil(parseInt(data.time / context.value1 ))} 
            trace={data.trace===0 ? '_' : data.trace}/>
            <Main14S />
        </div>
    )
}
const Main111S= (props)=> {
    return (
        <div className={props.className}>
            <img src={props.avatar} alt="" />
        </div>
    )
}
const Main112S= (props)=> {
    return (
        <div className={props.className}>
            {props.title}
        </div>
    )
}
const Main113S= (props)=> {
    return (
        <div className={props.className}>
            {props.icons}
            {props.title}
        </div>
    )
}
const Main11S= (props)=> {
    const location= useLocation()
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <Main111S className='advadvsdcxvc' avatar={props.avatar} />
                <div className='fbsfbsfcsdfv'>
                    <Main112S className='dfsdadvasdsd' title="me" />
                    <Main113S className='vdvcgfigsdfd' icons={id12} title={`${location.state.type} review`} />
                </div>
            </div>
            <div className={props.className2}>
                <Main113S className='dfsdadvasdsd fbvndfgbvdfbdsdfb' icons={i3} />
            </div>
        </div>
    )
}
// // //

const Main2S= (props)=> {
    return (
        <div className={props.className}></div>
    )
}

const MainS= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <div className={props.className2}>
                    {titleS}
                    <Main1S className='dffadfvdfcvfdsgh' className1='sdxasdxsad'
                     avatar={props.avatar} />
                </div>
            </div>
        </div>
    )
}
const Summary= memo((props)=> {
    useEffect(()=> {
        document.title= 'Summary - Quiz'
       
    },[])
    const location= useLocation()
    const [avatar, setAvatar]= useState(null)
    useEffect(()=> {
        axios({
            url: 'http://localhost:4000/getavatar',
            params: location.state.user
        })
        .then(res=> setAvatar(res.data[0].avatar))  

        
    })
    

   

   
    return (
        <div className='dfgjfdklsesesd'>
            <HeaderS className='vcbcddsfvfdr' className1='fjsdmkaass'
            className2='dfsfsdfsdfsd' className3='dfsfsdfsdfsd'/>
            <MainS className='fddsffsdfssad' className1='dfdsdfsadas' 
            className2='vasdasdxasddd' avatar={avatar}/>
        </div> 
    )
})