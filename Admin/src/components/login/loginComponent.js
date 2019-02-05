  import React, { Component } from "react";
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signedIn, updateUserData} from '../../store/actions/action';
import {auth} from '../../config/firebaseConfiguration'

class LoginComponent extends Component {
  state = {
    email : '',
    password : '',
    loading : false,
    errorTextPass : '',
    errorTextEmail : ''
  }

  emailHandler(ev){
    this.setState({
      email : ev.target.value
    })
  }

  passwordHandler(ev){
    this.setState({
      password : ev.target.value
    })
  }


  loginHandler(){ 
    console.log(this.state.email, this.state.password);
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
      console.log(res)
      this.props.signedIn();
    })
    .catch((err) => {
      console.log(err);
      if(err.message.includes('email')){
        this.setState({
          errorTextEmail : err.message
        })
      }
      else if(err.message.includes('password')){
        this.setState({
          errorTextPass : err.message
        })
      }
    })
  } 
  
  emailClickHandler = () => {
    this.setState({
      errorTextEmail : ''
    })
  }

  passwordClickHandler = () => {
    this.setState({
      errorTextPass : ''
    })
  }

  render(){
    return(
<div>
    <div style = {{width:'320px', margin : 'auto'}}>
    <div> <h3>LOGIN</h3> </div>
    <TextField
      hintText="admin@abc.com"
      errorText={this.state.errorTextEmail}
      floatingLabelText="Enter Email Here"
      onChange = {this.emailHandler.bind(this)}
      onClick = {this.emailClickHandler}
    />
    <TextField
      hintText="Password"
      errorText = {this.state.errorTextPass}
      floatingLabelText="Enter Password Here"
      type="password"
      onChange = {this.passwordHandler.bind(this)}
      onClick = {this.passwordClickHandler}
    />
    <RaisedButton label="Login" primary={true} onClick = {this.loginHandler.bind(this)} />
    <div>     
       </div>
    {(this.state.loading) ? (<div>Loading ... </div>) : (null)}
    </div>
  </div>
    )
  }
}

function mapDispatchToProp(dispatch) {
  return ({
      signedIn: () => {
          dispatch(signedIn())
      },
      updateUserData : (obj) => {
        dispatch(updateUserData(obj))
      }
  })
}

export default connect(null, mapDispatchToProp)(LoginComponent)
