import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AppBar from './appBar'
import web3 from "../interface/web3";
import VehicleController from "../interface/vehicleController";
import HelperFunctions from "../utils/constants";
import RaisedButton from 'material-ui/RaisedButton'
import MechanicComponent from './category/mechanicComponent'
import ShowroomComponent from './category/showroomComponent'
import InsuranceComponent from './category/insuranceComponent'
import DepartmentComponent from './category/motorDepartComponent'


export default class SearchBar extends Component {
    state = {
        value: '',
        insuranceData : [],
        mechanicData : [],
        showroomData : [],
        motorDeptData : [],
        showData : false
    };

    handleUpdateInput = (ev) => {
        this.setState({
            value: ev.target.value
        });
    };

    submitHandler = async () => {

        let fetchedData = {
            mechanicData: {
                '0': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': [],
                '9': []
            },
            showroomData: {
                '0': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': [],
                '9': []
            },
            motorDeptData: {
                '0': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': [],
                '9': []
            },
            insuranceData: {
                '0': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': []
            }
        };


        const showroomData1 = await VehicleController.methods.getShowroomDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const showroomData2 = await VehicleController.methods.getShowroomDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const mechanicData1 = await VehicleController.methods.getMechanicDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const mechanicData2 = await VehicleController.methods.getMechanicDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const motorDeptData1 = await VehicleController.methods.getMotorDeptDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const motorDeptData2 = await VehicleController.methods.getMotorDeptDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();
        const insuranceData1 = await VehicleController.methods.getInsuranceDataByVin1(HelperFunctions.convertStringToHex(this.state.value)).call();
        const insuranceData2 = await VehicleController.methods.getInsuranceDataByVin2(HelperFunctions.convertStringToHex(this.state.value)).call();

        //Checking if array is result is empty
        if (!HelperFunctions.isEmpty(mechanicData1['0'])) {
            let iterate = 5;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < mechanicData1[i].length; j++) {
                    fetchedData.mechanicData[i].push(HelperFunctions.convertHexToString(mechanicData1[i][j]))
                }
            }
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < mechanicData2[i].length; j++) {
                    if (i === 3) {
                        fetchedData.mechanicData[iterate].push(mechanicData2[i][j])
                    } else {
                        fetchedData.mechanicData[iterate].push(HelperFunctions.convertHexToString(mechanicData2[i][j]))
                    }
                    iterate = iterate + 1;
                }
            }
        }


        if (!HelperFunctions.isEmpty(showroomData1['0'])) {
            let iterate = 5;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < showroomData1[i].length; j++) {
                    fetchedData.showroomData[i].push(HelperFunctions.convertHexToString(showroomData1[i][j]))
                }
            }
            // for (let i = 0; i < 5; i++) {
            //     for (let j = 0; j < showroomData2[i].length; j++) {
            //         if (i === 3) {
            //             fetchedData.showroomData[iterate].push(showroomData2[i][j])
            //         } else {
            //             fetchedData.showroomData[iterate].push(HelperFunctions.convertHexToString(showroomData2[i][j]))
            //         }
            //         iterate = iterate + 1;
            //     }
            // }
        }



        if (!HelperFunctions.isEmpty(motorDeptData1['0'])) {
            let iterate = 5;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < motorDeptData1[i].length; j++) {
                    fetchedData.motorDeptData[i].push(HelperFunctions.convertHexToString(motorDeptData1[i][j]))
                }
            }
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < motorDeptData2[i].length; j++) {
                    if (i === 3) {
                        fetchedData.motorDeptData[iterate].push(motorDeptData2[i][j])
                    } else {
                        fetchedData.motorDeptData[iterate].push(HelperFunctions.convertHexToString(motorDeptData2[i][j]))
                    }
                    iterate = iterate + 1;
                }
            }
        }

        if (!HelperFunctions.isEmpty(insuranceData1['0'])) {
            let iterate = 5;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < insuranceData1[i].length; j++) {
                    fetchedData.insuranceData[i].push(HelperFunctions.convertHexToString(insuranceData1[i][j]))
                }
            }
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < insuranceData2[i].length; j++) {
                    if (i === 2) {
                        fetchedData.insuranceData[iterate].push(insuranceData2[i][j])
                    } else {
                        fetchedData.insuranceData[iterate].push(HelperFunctions.convertHexToString(insuranceData2[i][j]))
                    }
                    iterate = iterate + 1;
                }
            }
        }
        console.log(fetchedData);
        let that = this;
        console.log(this.state);
        console.log(fetchedData);
        console.log(fetchedData.mechanicData);
        mechanicData(fetchedData.mechanicData);
        console.log(fetchedData.showroomData);
        showroomData(fetchedData.showroomData);
        console.log(fetchedData.motorDeptData);
        motorDeptData(fetchedData.motorDeptData)
        console.log(fetchedData.insuranceData);
        insuranceData(fetchedData.insuranceData);

         //the object that is being received from the blockchain is instructed to strictly follow the structure
    // We have no options either than hard coding variables
    function mechanicData(obj){
        let arr = []
        for(let i=0; i<obj[0].length; i++){
          let data = {};
          data.vin = obj[0][i];
          data.shopId = obj[1][i];
          data.shopName = obj[2][i];
          data.shopAddress = obj[3][i];
          data.carDetails = obj[4][i];
          data.workDescription = obj[5][i];
          data.moneyCharged = obj[6][i];
          data.typeOfWork = obj[7][i];
          data.issuedDate = obj[8][i];
          data.additionalDetails = obj[9][i];
          arr.push(data)
        }
        console.log(arr)
        that.setState({
          mechanicData : arr
        })
      }
      function showroomData(obj){
  
        let arr = []
        for(let i=0; i<obj[0].length; i++){
          let data = {};
          data.vin = obj[0][i];
          data.ownerDetail = obj[1][i]
          data.modelDetail = obj[2][i]
          data.carCost = obj[3][i]
          data.carLoan = obj[4][i]
          data.showroomName = obj[5][i]
          data.showroomAddress = obj[6][i]
          data.showroomId = obj[7][i]
          data.issuedDate = obj[8][i]
          data.additionalDetails = obj[9][i]
          arr.push(data)
        }
        console.log(arr)
        that.setState({
          showroomData : arr
        })
      }
  
      function motorDeptData(obj){
  
        
        let arr = []
        for(let i=0; i<obj[0].length; i++){
          let data = {};
          data.vin = obj[0][i]
          data.ownerName = obj[1][i]
          data.regId = obj[2][i]
          data.milesOnCar = obj[3][i]
          data.modelDetail = obj[4][i]
          data.numberPlate = obj[5][i]
          data.motorDeptCity = obj[6][i]
          data.motorDeptAddress = obj[7][i]
          data.issuedDate = obj[8][i]
          data.additionalDetails = obj[9][i]
          arr.push(data)
        }
        console.log(arr)
        that.setState({
          motorDeptData : arr
        })
      }
      function insuranceData(obj){
        let arr = []
        for(let i=0; i<obj[0].length; i++){
          let data = {};
          data.vin = obj[0][i]
          data.insuranceNumber = obj[1][i]
          data.numOfInsurance = obj[2][i]
          data.insuranceDetail = obj[3][i]
          data.insuranceId = obj[4][i]
          data.insuranceCompanyName  = obj[5][i]
          data.insuranceCompanyAddress = obj[6][i]
          data.issuedDate = obj[7][i]
          data.additionalDetail = obj[8][i]
          arr.push(data)
        }
        console.log(arr)
        that.setState({
          insuranceData : arr,
          showData : true
        })
      }
    };

    render() {
        return (
            <div>
                <AppBar/>
                <div style={{width: 'fit-content', margin: 'auto', marginTop: '50px'}}>
                    <TextField
                        hintText="345567"
                        floatingLabelText="Enter VIN number here"
                        onChange={this.handleUpdateInput}
                    />
                    <RaisedButton label="Submit" primary={true} onClick={this.submitHandler}/>
                </div>
                {
          (this.state.showData) ? (
            <div style = {{width : '600px', margin : 'auto'}}>
              <MechanicComponent data = {this.state.mechanicData}/>
              <ShowroomComponent data = {this.state.showroomData}/>
              <InsuranceComponent data ={this.state.insuranceData} />
              <DepartmentComponent data = {this.state.motorDeptData}/>
            </div>
          ):(null)
        }
            </div>
        );
    }
}