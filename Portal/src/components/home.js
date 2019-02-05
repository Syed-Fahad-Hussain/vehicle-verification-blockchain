import React, { Component } from "react";
import {db,auth} from '../config/firebaseConfiguration'
import AppBarExampleIcon from './appBar';
// To Avoid Complexity Each Category has its own component
import Showroom from './portals/showroom';
import Insurance from './portals/insurance'
import Department from './portals/department'
import Mechanic from './portals/mechanic'

export default class Home extends Component {
  state = {
    category : '',
    uid : '',
    obj : {}
  }

    componentDidMount(){
       // console.log(userid)
        let uid = localStorage.getItem('uid');
        db.ref('/users/' + uid).once('value',(snapshot) => {
            // let userid =  auth.currentUser.uid;
            //save the uid in local storage
            // localStorage.setItem("uid", userid);
            console.log(snapshot.val(), snapshot.val().type);
            var objUser = snapshot.val();
            objUser.uid = uid;
            console.log(objUser)
            this.setState({
              category : snapshot.val().type,
              obj : objUser,
                uid : uid
            })
        })
    }    
  

    typeRender = () =>{
      // Check the category and render component accordingly
      if(this.state.category === 'showroom'){
      return <Showroom obj = {this.state.obj} uid = {this.state.uid}/>
      }else if(this.state.category === 'mechanic'){
        return <Mechanic obj = {this.state.obj}  uid = {this.state.uid}/>
      }else if(this.state.category === 'department'){
        return <Department obj = {this.state.obj}  uid = {this.state.uid}/>
      }else if(this.state.category === 'insurance'){
        return <Insurance obj = {this.state.obj}  uid = {this.state.uid}/>
      }
    }

    render(){
      const style = {
        width: 270,
        textAlign: 'center'
      };
        return(
          <div>
            <AppBarExampleIcon obj = {this.state.obj}/>
            {this.typeRender()}
        </div>
        )
    }
}  
