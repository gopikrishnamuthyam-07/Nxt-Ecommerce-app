import {Component} from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  // Intially store details in state , after that we will update in state
  state = {
    username: '',
    password: '',
    showSubmitError:false,
    errorMsg:"",
  }

  // On succesful submission you will get jwt token ,store that token in cookies.
  // Jwt token is necessary for further functions
onSubmitSuccess=(jwtToken)=>{
    Cookies.set('jwt_token',jwtToken,{expires:30})
    const {history} = this.props
    history.replace("/")
    window.location.reload()
}

onSubmitFailure=(errorMsg)=>{
  this.setState({showSubmitError:true,errorMsg})
}




// Form event which will show you that whether credentials are authenticated or not
// If we provide correct username and password , we can get jwt token and redirected to home page
//  client uses this JWT token on every Subsequent Request to communicate with server
//  Otherwise we get error message
  submitForm = async (event)=>{
    event.preventDefault()
    const {username,password} = this.state;
    const userDetails = {username,password}
    const url ="https://apis.ccbp.in/login"
    const options ={
        method:"POST",
        body:JSON.stringify(userDetails)
    }
    const response = await fetch(url,options)
    // console.log(response)
    const data = await response.json()
    console.log(data)
    if(response.ok===true){
        this.onSubmitSuccess(data.jwt_token)
    }
    else{
        this.onSubmitFailure(data.error_msg)
    }


  }

// we get the username 
  onChangeUsername = event => {
    this.setState({username: event.target.value})
    
  }
// we get the password
  onChangePassword = event => {
    this.setState({password: event.target.value})
    
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError,errorMsg}  = this.state

    const jwtToken = Cookies.get('jwt_Token')
    if(jwtToken !== undefined){
      return <Redirect to="/" />

    }

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://res.cloudinary.com/dqvaejele/image/upload/v1678095415/iStock-ecomm-1024x683_nirfbl.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className='error-message'>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
