import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './Components/Join/CountDown/Loading'
// import './Style/style.sass'
// import './Components/Join/style.sass'
import './Style/style.sass'
import './Components/Join/style.sass'
import './Components/Join/responsive.scss'
import './Components/Join/FucingWrite.css'
import './Components/DarkMode/style.sass'
import './Style/style.css'
const A= lazy(()=> {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Authentication')), 2000);
  });
})
const T= lazy(()=> {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Join/Index')), 2000);
  });
})

export default function Anonymous() {
  return (

    <div className='_83_wuji_8wje_kwsd'>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path='/' element={<Suspense fallback={<Loading />}><A /></Suspense>} />  
            <Route path='/join/*' element={<Suspense fallback={<Loading />}><T /></Suspense>} />
            <Route path='*' element={<div>404 Not Found</div>} />
            <Route path='/join/*' element={<div>404 Not Found</div>} />
          </Routes>  
        </Router>  
      </Suspense>
    </div>
  )
}
