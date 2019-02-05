import React, { Component } from "react";
import {TextField, Divider, Paper, RaisedButton} from 'material-ui';import Snackbar from 'material-ui/Snackbar';
import web3 from "../../interface/web3";
import VehicleController from "../../interface/vehicleController";
import HelperFunctions from "../../utils/constants";

export default class Mechanic extends Component{
    state = {
        VINnumber : '',
        price : '',
        model : '',
        maker : '',
        numberOfWheels : '',
        numberOfDoors : '',
        serviceType : '',
        moneyCharge : '',
        workDescription : '',
        additionalDetails : '', open : false, transactionHash : ''
    }
    
    submitHandler = async () => {
        if(this.state.numberOfWheels === '' || this.state.maker === '' || this.state.model === '' || this.state.price === '' || this.state.VINnumber === '' || this.state.numberOfDoors === '' || this.state.serviceType === '' || this.state.moneyCharge === '' || this.state.additionalDetails === '' || this.state.workDescription === '' ){
            alert('all the fields are required');
        }
        else{
            let that = this;
            let obj = this.state;
            const modelDetails = obj.numberOfWheels+"," +obj.model+","+obj.maker +","+obj.numberOfDoors;
            const accounts = await web3.eth.getAccounts();
            await VehicleController.methods
                .addMechanicData(
                    HelperFunctions.convertStringToHex(obj.VINnumber),
                    HelperFunctions.convertStringToHex(that.props.obj.uid),
                    HelperFunctions.convertStringToHex(that.props.obj.name),
                    HelperFunctions.convertStringToHex(that.props.obj.address),
                    HelperFunctions.convertStringToHex(modelDetails),
                    HelperFunctions.convertStringToHex(obj.workDescription),
                    HelperFunctions.convertStringToHex(obj.moneyCharge),
                    HelperFunctions.convertStringToHex(obj.serviceType),
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
                    console.log(err)
                    this.setState({
                        open : true
                    })
                });
        }
    };

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

    VINhandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            VINnumber : ev.target.value
        })
    }
    costHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            price : ev.target.value
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
    moneyChargeHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            moneyCharge : ev.target.value
        })
    }
    serviceTypeHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            serviceType : ev.target.value
        })
    }
    otherDetailsHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            additionalDetails : ev.target.value
        })
    }
    workDescriptionHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            workDescription : ev.target.value
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
      <TextField hintText="AGJ487" floatingLabelFixed={true} onChange = {this.VINhandler} floatingLabelText="Enter VIN Number here" underlineShow={false}/>
      <TextField hintText="40000 $" floatingLabelFixed={true} onChange = {this.costHandler} floatingLabelText= "Price" underlineShow={false} />
      <Divider/>
      <TextField hintText="2004" floatingLabelFixed={true} onChange = {this.modelHandler} floatingLabelText="Model Number" underlineShow={false} />
      <TextField hintText="Honda" floatingLabelFixed={true} onChange = {this.makerHandler} floatingLabelText = "Maker" underlineShow={false} />
      <Divider />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.wheelsHandler} floatingLabelText="Number Of Wheels" underlineShow={false} />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.doorsHandler} floatingLabelText = "Number Of Doors" underlineShow={false} />
      <Divider />
    </Paper>
    <TextField
        hintText="servicing, car repair, oil change, dents or accident repair"
        floatingLabelText="Which Type Of Service Done On The Car"
        onChange = {this.serviceTypeHandler}
    />
                    <TextField
            hintText="2000"
            floatingLabelText="Money Incurred"
            onChange = {this.moneyChargeHandler}
            /><br/>
      <TextField
        hintText="Other"
        floatingLabelText="Additional Details"
        fullWidth={true}
        onChange = {this.otherDetailsHandler}
      /><br/>
      <TextField
        hintText="All the ttyre changed"
        floatingLabelText="Work Description"
        fullWidth={true}
        onChange = {this.workDescriptionHandler}
      /><br/>
          <RaisedButton label="Submit" primary={true} onClick = {this.submitHandler} />
          {(this.state.transactionHash)? ( <div>
            <h5>Track Your Transction Here</h5>
            <a href = {this.state.transactionHash} target = "_blank"> {this.state.transactionHash} </a>
              </div>) : (null)
          }
          <Snackbar
          open={this.state.open}
          message="Metamask not loggedin"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
          </div>)
      }
}