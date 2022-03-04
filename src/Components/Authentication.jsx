import React, {useEffect, useState, useCallback} from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import md5 from 'md5'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { debounce } from 'lodash'
const cookies = new Cookies()
// import { debounce } from 'debounce'
// import $ from 'jquery'

            
const sleep= new Promise(res=> (setTimeout(res(''),1000)))
const A= ()=> {
    const navigate= useNavigate()
    useEffect(()=> {
        if(cookies.get('quizA')) {
            navigate('/join', {replace: true})
        }
    // eslint-disable-next-line
    },[])
    const [a, setA]= useState(true) 
    const isChange= ()=> {
        setA(!a)
    }
    return (
        <React.Fragment>        
            {a ? <L isChange={isChange} /> : <S isChange={isChange}/> }
        </React.Fragment>
    )
}

const n= <Form.Group className='mb-3 h6'>
            <Form.Text className='text-success'>Signup successfully. </Form.Text>
        </Form.Group>

const n1= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Enter your email. </Form.Text>
        </Form.Group>

const n2= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Enter your firstname. </Form.Text>
        </Form.Group>
const n3= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Enter your surname. </Form.Text>
        </Form.Group>
const n4= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Enter your account. </Form.Text>
        </Form.Group>
const n5= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Enter your password. </Form.Text>
        </Form.Group>
const n6= <Form.Group className='mb-3 h5'>
            <Form.Text className='text-danger'>Please confirm your password. </Form.Text>
        </Form.Group>
const S= (props)=> {
    useEffect(()=> {
        document.title= 'Sign up'
    })
    
    const [noti, setNoti]= useState(true)
    const [info, setInfo]= useState({
        email: '',
        firstName: '',
        surName: '',
        account: '',
        password: '',
        confirmPassword: ''
    })
    const [state,setState]= useState([
        {state1: false},
        {state2: false},
        {state3: false},
        {state4: false},
        {state5: false},
        {state6: false},

    ])
    const [wrongConfirm, setWrongConfirm]= useState(false)

    const isSignup= ()=> {
        axios({
            url: 'http://localhost:4000/signup',
            method: 'post',
            data: {
                email: info.email,
                firstName: info.firstName,
                surName: info.surName,
                account: info.account,
                password: md5(info.password),
                confirmPassword: md5(info.confirmPassword)
                
            }
        }).then((res)=> {
            if(res.data=== 'success') {
                setNoti(!noti)
            }
            else if(res.data=== 'duplicate2') {
                setWrongConfirm(!wrongConfirm)
            }
            else if(res.data==='duplicate') {
                if(info.email==='' || undefined || null) {
                    setState((prev)=> ({...prev, state1: true}))
                }
                if(info.firstName==='' || undefined || null) {
                    setState((prev)=> ({...prev, state2: true}))
                }
                if(info.surName==='' || undefined || null) {
                    setState((prev)=> ({...prev, state3: true}))
                }
                if(info.account==='' || undefined || null) {
                    setState((prev)=> ({...prev, state4: true}))
                }
                if(info.password==='' || undefined || null) {
                    setState((prev)=> ({...prev, state5: true}))
                }
                if(info.confirmPassword==='' || undefined || null) {
                    setState((prev)=> ({...prev, state6: true}))
                }
               
            }
            else if(res.data=== 'email exist') {
                
            }
            
        })
        
    }
    //eslint-disable-next-line
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState('');

    function openDropdown() {
        setVisible(true);
    }
    const [duplicate, setDuplicate]= useState(false)
    const [disabled, setDisabled]= useState(true)
    const fetchDropdownOptions= async (key)=> {
        await axios({
            url: `http://localhost:4000/users?name=${key}`,
            method: 'get',
            data: {
                account: key
            }   
        })
        .then((res)=> {
            if(res.data=== 'success') {
                setDuplicate(true)
                setDisabled(true)
            }
            else {
                setDuplicate(false)
                setDisabled(false)
            }
        } )
    }
    //eslint-disable-next-line
    const debounceDropDown = useCallback(debounce((nextValue) => fetchDropdownOptions(nextValue), 1000), [])

    function handleInputOnchange(e) {
        const { value } = e.target;
        setKeyword(value);
        debounceDropDown(value);
    }
    
    return (
        <div className='_9q3_94we_49wr2'>
            <Form className='_3s90dsj_9we_902wiekds'>
                <Form.Group className='mb-3 h2 mt-5'>
                    <Form.Text>Signup</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={keyword} onClick={openDropdown} onChange={(e)=> {setInfo((prev)=> ({...prev, email: e.target.value}));handleInputOnchange(e)}} type='email' placeholder='Enter your email'/>
                    <Form.Text style={{fontSize: 12}}>Don't share your email with anymore. It's very necessary when you forgot password</Form.Text>
                    <br />
                    {duplicate && <Form.Text style={{fontSize: 16, color: 'red'}}>Email already exist, Please enter other email.</Form.Text>}
                    {state.state1 && n1}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formFirstName'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control onChange={(e)=> setInfo((prev)=> ({...prev, firstName: e.target.value}))}  type='text' placeholder="Enter your first name" />
                    {state.state2 && n2}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formSurname'>
                    <Form.Label>Sur name</Form.Label>
                    <Form.Control onChange={(e)=> setInfo((prev)=> ({...prev, surName: e.target.value}))}  type='text' placeholder="Enter your sur name" />
                    {state.state3 && n3}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAccount'>
                    <Form.Label>Account</Form.Label>
                    <Form.Control onChange={(e)=> setInfo((prev)=> ({...prev, account: e.target.value}))}  type='text' placeholder='Enter your account'/>
                    {state.state4 && n4}

                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=> setInfo((prev)=> ({...prev, password: e.target.value}))}  type='password' placeholder='Enter your password'/>
                    {state.state5 && n5}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control  onChange={(e)=> setInfo((prev)=> ({...prev, confirmPassword: e.target.value}))}  type='password' placeholder='Confirm your password'/>
                    {state.state6 && n6}
                </Form.Group>
                {noti? <React.Fragment>
                            <Form.Group className='mb-3 d-flex justify-content-center align-items-center'>
                                <Button disabled={disabled} onClick={isSignup} variant='primary'>Sign up</Button>
                            </Form.Group>
                            <Form.Group className='mb-3 d-flex justify-content-center align-items-center flex-column'>
                                <Form.Text style={{userSelect: 'none'}}>Do you have account ?</Form.Text>
                                <br />
                                <Button onClick={props.isChange}>Login</Button>
                            </Form.Group>
                        </React.Fragment>
                        : <React.Fragment>
                            {n}
                            <Form.Group className='mb-3 d-flex justify-content-center align-items-center flex-column'>
                                <br />
                                <Button onClick={props.isChange}>Go to login</Button>
                            </Form.Group>
                        </React.Fragment>
                    }
                    
                
            </Form>
        </div>
    )
}

const l= <Form.Group className='mb-3 h6'>
            <Form.Text className='text-danger'>Login failed. Account or password incorrect.</Form.Text>
        </Form.Group>
const L= (props)=> {
    useEffect(()=> {
        document.title= 'Login'
    })
    const [loginFail, setLoginFail]= useState(false)
    const navigate= useNavigate()
    const [info, setInfo]= useState({
            account: '',
            password: ''
        }
    )

    const getValueAccount= (e)=> {
        setInfo((prev)=> ({...prev, account: e.target.value}))
    }
    const getValuePassword= (e)=> {
        setInfo((prev)=> ({...prev, password: e.target.value}))
    }
    const [state, setState]= useState(false)
    const [state1, setState1]= useState(false)
    const isLogin= async ()=> {
        await axios({
            url: 'http://localhost:4000/login',
            method: 'post',
            data: {
                account: info.account,
                password: md5(info.password)    
            }
        }).then(res=> {
            console.log(res.data)
            if(res.data=== 'empty1') {
                setState(true)
            }
            if(res.data=== 'empty2') {
                setState1(true)
            }

            else if(res.data !== 'not exist' && res.data !== 'empty1' && res.data !== 'empty2') {
                console.log(res.data)
                setState(false)
                setState1(false)
                cookies.set('quizA', `${res.data[0].id_unique}` , { path: '/', expires:new Date(Number(new Date()) + 315360000000),secure: true,maxAge: 86400 * 30 })
                navigate('/join', {replace: true, cookies: info.account})
            }
            else {
                setLoginFail(true)
            }
        })
        await sleep
    
    }
    
    // $('._30qwe_2idsmk_39wek').on('keyup', debounce(function() {
    //     let $this= $(this).val()
    //     axios({
    //         url: `http://localhost:4000/checkuser`,
    //         method: 'get',
    //         data: {
    //             account: 1
    //         }
    //     })
    // },1500))
    
    // login
    const b1= <div className='sjkjbdsjljkfdsz'>
                <div className='ildfjlfjsldfd' style={{color: 'red'}}>
                    Please enter your account
                </div>

              </div>
    const b2= <div className='sjkjbdsjljkfdsz'>
                <div className='ildfjlfjsldfd' style={{color: 'red'}}>
                    Please enter your password 
                </div>

  </div>
    return (
        <div className='_9q3_94we_49wr2'>
            <Form className='_3s90dsj_9we_902wiekds'>
                <Form.Group className='mb-3 h2'>
                    <Form.Text>Login</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='EnterAccount'>
                    <Form.Label>Account</Form.Label>
                    <Form.Control className="_30qwe_2idsmk_39wek" onChange={(e)=> getValueAccount(e)} type='text' placeholder='Enter your account'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='EnterPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete='false' onChange={(e)=> getValuePassword(e)} type='password' placeholder='Enter your password'/>
                    {state && b1}
                    {state1 && b2}
                </Form.Group>
                <Form.Group className='mb-3 d-flex justify-content-center align-items-center'>
                    <Button onClick={isLogin} variant='primary'>Login</Button>
                </Form.Group>
                {loginFail && l}
                <Form.Group className='mb-3 d-flex justify-content-center align-items-center flex-column'>
                    <Form.Text>You don't have account ?</Form.Text>
                    <br />
                    <Button onClick={props.isChange}>Sign up</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default React.memo(A)