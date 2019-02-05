import React, { Component } from "react";
import {TextField, Divider, Paper, RaisedButton} from 'material-ui';import Snackbar from 'material-ui/Snackbar';
import web3 from "../../interface/web3";
import VehicleController from "../../interface/vehicleController";
import HelperFunctions from "../../utils/constants";

export default class Insurance extends Component{
    state = {
        VINnumber : '',
        insuranceNumber : '',
        insuranceDetails : '',
        insuranceCompany : '',
        numberOfInsurance : '',
        additionalDetails : '', open : false, transactionHash : ''
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
        if(this.state.insuranceNumber === '' || this.state.insuranceCompany === '' || this.state.numberOfInsurance === '' || this.state.additionalDetails === '' || this.state.VINnumber === ''){
            alert('all the fields are required');
        }
        else{
            let that = this;
            let obj = this.state;
            const accounts = await web3.eth.getAccounts();
            await VehicleController.methods
                .addInsuranceData(
                    HelperFunctions.convertStringToHex(obj.VINnumber),
                    HelperFunctions.convertStringToHex(obj.insuranceNumber),
                    HelperFunctions.convertStringToHex(obj.numberOfInsurance),
                    HelperFunctions.convertStringToHex(obj.insuranceDetails),
                    HelperFunctions.convertStringToHex(obj.insuranceNumber),
                    HelperFunctions.convertStringToHex(obj.insuranceCompany),
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
                    console.log(err)
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
    numberOfInsuranceHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            numberOfInsurance : ev.target.value
        })
    }
    InsuranceDetailsHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            model : ev.target.value
        })
    }
    insuranceCompanyHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            insuranceCompany : ev.target.value
        })
    }
    InsuranceNumberHandler = (ev) => {
        console.log(ev.target.value)
        this.setState({
            insuranceNumber : ev.target.value
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
      {/* <TextField hintText="40000 $" floatingLabelFixed={true} onChange = {this.costHandler} floatingLabelText= "Price" underlineShow={false} />
      <Divider/>
      <TextField hintText="2004" floatingLabelFixed={true} onChange = {this.modelHandler} floatingLabelText="Model Number" underlineShow={false} />
      <TextField hintText="Honda" floatingLabelFixed={true} onChange = {this.makerHandler} floatingLabelText = "Maker" underlineShow={false} />
      <Divider />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.wheelsHandler} floatingLabelText="Number Of Wheels" underlineShow={false} />
      <TextField hintText="4" floatingLabelFixed={true} onChange = {this.doorsHandler} floatingLabelText = "Number Of Doors" underlineShow={false} />
      <Divider /> */}
    </Paper>
    <TextField
        hintText="Jubliee Insurance"
        floatingLabelText="Insurance Company Name"
        onChange = {this.insuranceCompanyHandler}
    />
                    <TextField
            hintText="8034"
            floatingLabelText="Enter Insurance Number Here"
            onChange = {this.InsuranceNumberHandler}
            /><br/>
                <TextField
        hintText="2"
        floatingLabelText="Number Of Insurances"
        onChange = {this.numberOfInsuranceHandler}
    />
                    <TextField
            hintText="Life-time insurance etc"
            floatingLabelText="Insurance Details"
            onChange = {this.InsuranceDetailsHandler}
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
          message="Metamask not loggedin"
          onClick = {this.handleClick}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
          </div>)
      }
}