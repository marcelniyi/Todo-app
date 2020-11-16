import React from 'react'
import '../Login/style.css'
import firebase from '../../firebase'
import history from '../../history'
import {Link, withRouter} from 'react-router-dom'



class Register extends React.Component {

  constructor(props){
    super(props);
      this.state = {
          email:'',
          password: '',
          cpassword: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this)
  };


  emailChange = (e)=>{
    var value = e.target.value;
    this.setState({
        email:value
    })
  }

  passwordChange = (e)=>{
    var value = e.target.value;
    this.setState({
        password:value
    })
  }

  cpasswordChange = (e)=>{
    var value = e.target.value;
    this.setState({
        cpassword:value
    })
  }

handleSubmit = async (e) =>{
  e.preventDefault();
    try {
      console.log(this.state.email);
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      setTimeout(() => {
          console.log('success', 'Signed-up successfully!');
          this.props.history.replace('/')
      }, 2000);

    } catch (error) {
      alert(error.message)
    }
  }




  render(){
    return (
      <div className="register-container">
  <div className="register-form">
    <div className="contain">
      <div className="form-message">


      </div>
    </div>
    <form id="signup-form" onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.emailChange} placeholder="Email" /><span id="emailError" />
      <input type="password" onChange={this.passwordChange} placeholder="Password" /><span id="passwordError" />
      <input type="password" onChange={this.cpasswordChange} placeholder="Confirm password" /><span id="cpasswordError" />
      <input type="submit" value="Register"  />
    </form>
  </div>
  <div className="register-msg">
    <span>Already have an account?</span>
    <br />
    <a href="/">Login</a>
  </div>
</div>

    )
  }
}


export default withRouter(Register)
