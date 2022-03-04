import React, {useEffect} from 'react'
import { V as D } from '../Join/Index'

const G= (props)=> {
    useEffect(()=> {
        document.title= 'My Completed Activities - Quiz'
    })
    return (
        <div className={props.className}>
            <D />
        </div>
    )
}
export default React.memo(G)