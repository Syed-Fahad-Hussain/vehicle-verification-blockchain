import React, { Component } from "react";
import {TextField, Divider, Paper, RaisedButton} from 'material-ui';import Snackbar from 'material-ui/Snackbar';
import web3 from "../../interface/web3";
import VehicleController from "../../interface/vehicleController";
import HelperFunctions from "../../utils/constants";
import {auth} from '../../config/firebaseConfiguration'

export default class Department extends Component{
    state = {
        uid : '',
        VINnumber : '',
        model : '',
        maker : '',
        numberOfWheels : '',
        numberOfDoors : '',
        carMilage : '',
        plateNumber : '',
        registrationID : '',
        name : '',
        additionalDetails : '', open : false, transactionHash : ''
    }

    componentDidMount(){
        let uid = auth.currentUser.uid;
        this.setState({
            uid : uid
        })
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

    submitHandler = async () => {
        let obj = this.state;
        if(this.state.plateNumber === '' || this.state.carMilage === '' || this.state.registrationID === '' || this.state.additionalDetails === '' || this.state.maker === '' || this.state.model === '' || this.state.numberOfDoors === '' || this.state.name === '' || this.state.numberOfWheels === '' || this.state.VINnumber === ''){
            alert('all the fields are required');
        }
        else{
            console.log(this.state)
            let that = this;
            // let obj = this.state;
            const modelDetails = obj.numberOfWheels+"," +obj.model+","+obj.maker +","+obj.numberOfDoors;
            const accounts = await web3.eth.getAccounts();
            await VehicleController.methods
                .addMotorDeptData(
                    HelperFunctions.convertStringToHex(obj.VINnumber),
                    HelperFunctions.convertStringToHex(obj.name),
                    HelperFunctions.convertStringToHex(obj.uid),
                    HelperFunctions.convertStringToHex(obj.carMilage),
                    HelperFunctions.convertStringToHex(modelDetails),
                    HelperFunctions.convertStringToHex(obj.plateNumber),
                    HelperFunctions.convertStringToHex(that.props.obj.name),
                    HelperFunctions.convertStringToHex(that.props.obj.address),
                    HelperFunctions.getUnixTime(),
                    HelperFunctions.convertStringToHex(obj.additionalDetails))
                .send({
                    from: accounts[0]
                }).on('transactionHash',(hash) =>{
                    console.log(hash);
                    this.setState({transactionHash : 'https://rinkeby.etherscan.io/tx/'+hash})
                }).on('confirmation', function(){
                    // this.setState = ({open : true})
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        open : true
                    })
                })
        }
    }

    VINhandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            VINnumber : ev.target.value
        })
    }
    carMilageHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
          carMilage : ev.target.value
        })
      }
      modelHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            model : ev.target.value
        })
    }
    makerHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            maker : ev.target.value
        })
    }
    wheelsHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            numberOfWheels : ev.target.value
        })
    }
    doorsHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            numberOfDoors : ev.target.value
        })
    }
    nameHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            name : ev.target.value
        })
    }
    plateNumberHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            plateNumber : ev.target.value
        })
    }
    registrationIDHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            bankOrLoan : ev.target.value
        })
    }
    otherDetailsHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            additionalDetails : ev.target.value
        })
    }

    render(){
        const style = {
            width : 'auto',
          marginTop : '15px',
          paddingLeft : '10px'
        };

        return(
          <div style = {{width : 'fit-content', margin : 'auto'}}>
          <h3 style = {style}>Car Details</h3>
    <Paper zDepth={2} style = {style}>
      <TextField floatingLabelFixed={true} onChange = {this.VINhandler} floatingLabelText="Enter VIN Number here" underlineShow={false}/>
      <TextField hintText="2828" floatingLabelFixed={true} onChange = {this.carMilageHandler} floatingLabelText= "Car Mileage" underlineShow={false} />
      <Divider/>
      <TextField hintText="2004" floatingLabelFixed={true} onChange = {this.modelHandler} floatingLabelText="Model Number" underlineShow={false} />
      <TextField hintText="Honda" floatingLabelFixed={true} onChange = {this.makerHandler} floatingLabelText = "Maker" underlineShow={false} />
      <Divider />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.wheelsHandler} floatingLabelText="Number Of Wheels" underlineShow={false} />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.doorsHandler} floatingLabelText = "Number Of Doors" underlineShow={false} />
      <Divider />
    </Paper>
    <TextField
        hintText="AGJ487"
        floatingLabelText="Plate Number"
        onChange = {this.plateNumberHandler}
    />
                    <TextField
            hintText="13821312343"
            floatingLabelText="Registration ID"
            onChange = {this.registrationIDHandler}
            /><br/>
                      <TextField
        hintText="Goldberg"
        floatingLabelText="Owner Name"
        onChange = {this.nameHandler}
        fullWidth={true}
      /><br/>
      <TextField
        hintText="Other"
        floatingLabelText="Additional Details"
        fullWidth={true}
        onChange = {this.otherDetailsHandler}
      /><br/>
          <RaisedButton label="Submit" primary={true} onClick = {this.submitHandler} />
          {(this.state.transactionHash)? ( <div>
            <h5>Track Your Transction Here</h5>
            <a href = {this.state.transactionHash} target = "_blank"> {this.state.transactionHash} </a>
              </div>) : (null)
          }
          <Snackbar
          open={this.state.open}
          message="Metamask is not loggedin"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}/>
          {(this.state.transac)}
          </div>)
      }
}