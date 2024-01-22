import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'


// If token is undefined it will redirected to login route ,else redirected to home page

const ProtectedRoute =(props)=>{
    const token = Cookies.get('jwt_token')
    if(token=== undefined){
        return <Redirect to="/login" />
    }
    return <Route {...props}/>
}

export default ProtectedRoute


