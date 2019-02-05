import React, { Component } from "react";
import {RaisedButton, Snackbar, TextField} from 'material-ui'
import { Container, Row, Col } from 'react-grid-system';
import SidebarComponent from "../sidebar";
import {auth, db} from '../../config/firebaseConfiguration';
import web3 from '../../interface/web3'
import VehicleController from '../../interface/vehicleController';

export default class Showroom extends Component{
    state = {
        email : '',
        password : '',
        name : '',
        address : '',
        ethereumAddress : '',
        transactionHash : '',
        open : false
    }

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    emailHandler (ev)  {
        this.setState({
            email : ev.target.value
        })
    }

    passwordHandler (ev)  {
        this.setState({
            password : ev.target.value
        })
    }
    
    nameHandler (ev)  {
        this.setState({
            name : ev.target.value
        })
    }

    addressHandler (ev)  {
        this.setState({
            address : ev.target.value
        })
    }
    
    EthereumHandler(ev) {
        this.setState({
            ethereumAddress : ev.target.value
        })
    }

    submitTrasaction = async () => {
        const accounts = await web3.eth.getAccounts();
        let that = this;
        console.log(accounts, this.state)
        await VehicleController.methods
            .addShowroomOwner(this.state.ethereumAddress).send({
                from: accounts[0]
            }).on('transactionHash',(hash) =>{
                console.log(hash)
                that.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
            }).on('confirmation', function(){
                console.log("Transaction confirmed");
                this.setState ({
                    open : true
                })
            });

    }

        createAccount = async () => {



        console.log(this.state);
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            this.submitTrasaction();
            let uid = auth.currentUser.uid;
            console.log('work');
            let obj = this.state;
            obj.type = 'showroom'
            db.ref('/users/'+uid).set(obj)
            .then((res) => {
            })
            .catch(err => alert(err.message))
        })
        .catch(err => {
            alert(err.message)
        })
    }

    render(){
        return(
                <Container style = {{margin : 0, padding : 0}}>
  <Row style = {{margin : 0, padding : 0}}>
    <Col sm={4}>
    <SidebarComponent/>
    </Col>
    <Col sm={8}>
    <h1>Showroom</h1>
    <TextField
              hintText="Email"
              floatingLabelText="abc@gmail.com"
              floatingLabelFixed={true}
              onChange = {this.emailHandler.bind(this)}
            /><br />
            <TextField
              hintText="Password"
              floatingLabelText="******"
              floatingLabelFixed={true}
              type="password"
              onChange = {this.passwordHandler.bind(this)}
            /><br />
            <TextField
              hintText="Name"
              floatingLabelText="Showroom Name"
              floatingLabelFixed={true}
              onChange = {this.nameHandler.bind(this)}
            /><br />
            <TextField
              hintText="Address"
              floatingLabelText="Showroom Address"
              floatingLabelFixed={true}
              onChange = {this.addressHandler.bind(this)}
            /><br />
            <TextField
              hintText="23432823fFE"
              floatingLabelText="Ethereum Address"
              floatingLabelFixed={true}
              onChange = {this.EthereumHandler.bind(this)}
            /><br />
                <RaisedButton label="submit" primary={true} onClick = {this.createAccount}/>
        {(this.state.transactionHash) ? ( <div> <h3>Track Your Transaction here</h3>
            <a href = {this.state.transactionHash} target= "_blank">{this.state.transactionHash}</a> </div>) : (null)}
        {/*{(this.state.confirm) ? (<div style={{color : 'green'}}>Transaction success </div>) : (null)}*/}
        <Snackbar
            open={this.state.open}
            message="Transaction Confirmed"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
        />
    </Col>
  </Row>
</Container>
        )
    }
}