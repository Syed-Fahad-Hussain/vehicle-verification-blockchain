import React, { Component } from "react";
import {TextField, Divider, Paper, RaisedButton} from 'material-ui';import Snackbar from 'material-ui/Snackbar';
import web3 from '../../interface/web3'
import VehicleController from '../../interface/vehicleController';
import HelperFunctions from "../../utils/constants";

export default class Showroom extends Component{
    state = {
        VINnumber : '',
        price : '',
        model : '',
        maker : '',
        numberOfWheels : '',
        numberOfDoors : '',
        name : '',
        license : '',
        bankOrLoan : '',
        additionalDetails : '', open : false, transactionHash : '',
    };

    submitHandler = async () => {
        if(this.state.numberOfWheels === '' || this.state.maker === '' || this.state.model === '' || this.state.price === '' || this.state.VINnumber === '' || this.state.numberOfDoors === '' || this.state.license === '' || this.state.name === '' || this.state.additionalDetails === '' || this.state.bankOrLoan === '' ){
            alert('all the fields are required');
        }
        else{
            let that = this;
            let obj = this.state;
            const modelDetails = obj.numberOfWheels+"," +obj.model+","+obj.maker +","+obj.numberOfDoors;
            const accounts = await web3.eth.getAccounts();

            await VehicleController.methods
                .addShowroomData(
                    HelperFunctions.convertStringToHex(obj.VINnumber),
                    HelperFunctions.convertStringToHex(obj.name +"," +obj.license),
                    HelperFunctions.convertStringToHex(modelDetails),
                    HelperFunctions.convertStringToHex(obj.price),
                    HelperFunctions.convertStringToHex(obj.bankOrLoan),
                    HelperFunctions.convertStringToHex(that.props.obj.name),
                    HelperFunctions.convertStringToHex(that.props.obj.address),
                    HelperFunctions.convertStringToHex(that.props.obj.uid),
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
                    this.setState({
                        open : true
                    })
                    console.log(err);
                })
        }

    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
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
    nameHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            name : ev.target.value
        })
    }
    licenseHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            license : ev.target.value
        })
    }
    bankHandler = (ev) => {
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
        hintText="John Reigns"
        floatingLabelText="Customer Name"
        onChange = {this.nameHandler}
    />
                    <TextField
            hintText="License Number"
            floatingLabelText="Enter License Number Here"
            onChange = {this.licenseHandler}
            /><br/>
                      <TextField
        hintText="JS bank"
        floatingLabelText="Bank or Loan Provider Name"
        onChange = {this.bankHandler}
        fullWidth={true}
      /><br/>
      <TextField
        hintText="Other"
        floatingLabelText="Additional Details"
        fullWidth={true}
        onChange = {this.otherDetailsHandler}
      /><br/>
          <RaisedButton label="Submit" primary={true} onClick = {this.submitHandler} />
                      <Snackbar
                          open={this.state.open}
                          message="Meta Mask Not loggedin"
                          autoHideDuration={4000}
                          onRequestClose={this.handleRequestClose}
                      />
          {(this.state.transactionHash)? (
              <div>
            <h5>Track Your Transction Here</h5>
            <a href = {this.state.transactionHash} target = "_blank"> {this.state.transactionHash} </a>
              </div>) : (null)
          }
          {/*<Snackbar*/}
          {/*open={this.state.open}*/}
          {/*message="Transaction Confirmed"*/}
          {/*autoHideDuration={4000}*/}
          {/*onRequestClose={this.handleRequestClose}*/}
        {/*/>*/}
          </div>)
      }
}