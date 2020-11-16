import React from 'react'
import './style.css'



class SingIn extends React.Component {
  render(){
    return (

      <div className="register-container">
  <div className="register-form">
    <form id="login-form">
      <input type="text" id="email" placeholder="Email" />
      <span id="emailError" />
      <input type="password" id="password" placeholder="Password" />
      <span id="passwordError" />
      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
  <div className="register-msg">
    <h2>Get in touch</h2>
    <span>Don't have an account?</span>
    <br />
      <a href="/register">Register</a>

  </div>
</div>



    )
  }
}



export default SingIn;
