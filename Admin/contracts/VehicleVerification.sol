pragma solidity ^0.4.24;

import "./AccessControl.sol";

contract VehicleVerification is Ownable {

    struct showroomData {
        bytes32 vin;
        bytes32 ownerDetail;
        bytes32 modelDetail;
        bytes32 carCost;
        bytes32 carLoanOrBankDetail;
        bytes32 showroomName;
        bytes32 showroomAddress;
        bytes32 showroomId;
        uint256 issuedDate;
        bytes32 additionalDetail;
    }

    struct insuranceData {
        bytes32 vin;
        bytes32 insuranceNumber;
        bytes32 numOfInsurance;
        bytes32 insuranceDetail;
        bytes32 insuranceId;
        bytes32 insuranceCompanyName;
        bytes32 insuranceCompanyAddress;
        uint256 issuedDate;
        bytes32 additionalDetail;
    }

    struct motorDeptData {
        bytes32 vin;
        bytes32 ownerName;
        bytes32 regId;
        bytes32 milesOnCar;
        bytes32 modelDetail;
        bytes32 numberPlate;
        bytes32 motorDeptCity;
        bytes32 motorDeptAddress;
        uint256 issuedDate;
        bytes32 additionalDetail;
    }

    struct mechanicData {
        bytes32 vin;
        bytes32 shopId;
        bytes32 shopName;
        bytes32 shopAddress;
        bytes32 carDetail;
        bytes32 workDescription;
        bytes32 moneyCharged;
        bytes32 typeOfWork;
        uint256 issuedDate;
        bytes32 additionalDetail;
    }

    //Saving addresses of data creators
    mapping(address => bool) public ShowroomOwners;
    mapping(address => bool) public InsuranceOwners;
    mapping(address => bool) public MotorDeptOwners;
    mapping(address => bool) public MechanicOwners;


    // Mapping unique id of every record to Data
    mapping(bytes32 => showroomData) public idToShowRoomData;
    mapping(bytes32 => insuranceData) public idToInsuranceData;
    mapping(bytes32 => motorDeptData) public idToMotorDeptData;
    mapping(bytes32 => mechanicData) public idToMechanicData;

    //Mapping vin to unique id of record
    mapping(bytes32 => bytes32[]) public vinToShowroomDataId;
    mapping(bytes32 => bytes32[]) public vinToInsuranceDataId;
    mapping(bytes32 => bytes32[]) public vinToMotorDeptDataId;
    mapping(bytes32 => bytes32[]) public vinToMechanicDataId;

    // Saving unique ids of data
    bytes32[] public showroomDataIds;
    bytes32[] public insuranceDataIds;
    bytes32[] public motorDeptDataIds;
    bytes32[] public mechanicDataIds;

    //Adding owner functions
    function addShowroomOwner(address _addr) public onlyOwner {
        ShowroomOwners[_addr] = true;
    }

    function addInsuranceOwner(address _addr) public onlyOwner {
        InsuranceOwners[_addr] = true;
    }

    function addMotorDeptOwner(address _addr) public onlyOwner {
        MotorDeptOwners[_addr] = true;
    }

    function addMechanicOwner(address _addr) public onlyOwner {
        MechanicOwners[_addr] = true;
    }

    //Removing owner functions
    function removeShowroomOwner(address _addr) public onlyOwner {
        ShowroomOwners[_addr] = false;
    }

    function removeInsuranceOwner(address _addr) public onlyOwner {
        InsuranceOwners[_addr] = false;
    }

    function removeMotorDeptOwner(address _addr) public onlyOwner {
        MotorDeptOwners[_addr] = false;
    }

    function removeMechanicOwner(address _addr) public onlyOwner {
        MechanicOwners[_addr] = false;
    }

    function addMechanicData(bytes32 _vin, bytes32 _shopId , bytes32 _shopName, bytes32 _shopAddress ,bytes32 _carDetail , bytes32 _workDescription, bytes32 _moneyCharged, bytes32 _typeOfWork, uint256 _issuedDate, bytes32 _additionalDetail) public onlyOwner returns (bytes32) {
        require(MechanicOwners[msg.sender] == true);

        bytes32 mechanicDataId = keccak256(abi.encodePacked(_vin, _shopId, _shopName, _shopAddress, _carDetail, _workDescription, _moneyCharged, _typeOfWork, _issuedDate, _additionalDetail));

        idToMechanicData[mechanicDataId] = mechanicData(_vin, _shopId, _shopName, _shopAddress, _carDetail, _workDescription, _moneyCharged, _typeOfWork, _issuedDate, _additionalDetail);
        vinToMechanicDataId[_vin].push(mechanicDataId);
        mechanicDataIds.push(mechanicDataId);

        return mechanicDataId;
    }


    function addMotorDeptData(bytes32 _vin, bytes32 _ownerName, bytes32 _regId, bytes32 _milesOnCar, bytes32 _modelDetail, bytes32 _numberPlate, bytes32 _motorDeptCity, bytes32 _motorDeptAddress, uint256 _issuedDate, bytes32 _additionalDetail) public onlyOwner returns (bytes32) {
        require(MotorDeptOwners[msg.sender] == true);

        bytes32 motorDeptDataId = keccak256(abi.encodePacked(_vin, _ownerName, _regId, _milesOnCar, _modelDetail, _numberPlate, _motorDeptCity, _motorDeptAddress, _issuedDate, _additionalDetail));

        idToMotorDeptData[motorDeptDataId] = motorDeptData(_vin, _ownerName, _regId, _milesOnCar, _modelDetail, _numberPlate, _motorDeptCity, _motorDeptAddress, _issuedDate, _additionalDetail);
        vinToMotorDeptDataId[_vin].push(motorDeptDataId);
        motorDeptDataIds.push(motorDeptDataId);

        return motorDeptDataId;
    }

    function addShowroomData( bytes32 _vin, bytes32 _ownerDetail, bytes32 _modelDetail, bytes32 _carCost, bytes32 _carLoanOrBankDetail, bytes32 _showroomName, bytes32 _showroomAddress, bytes32 _showroomId, uint256 _issuedDate, bytes32 _additionalDetail) public onlyOwner returns (bytes32) {
        require(ShowroomOwners[msg.sender] == true);

        bytes32 showroomDataId = keccak256(abi.encodePacked(_vin, _ownerDetail, _modelDetail, _carCost, _carLoanOrBankDetail, _showroomName, _showroomAddress , _showroomId, _issuedDate, _additionalDetail));

        idToShowRoomData[showroomDataId] = showroomData(_vin, _ownerDetail, _modelDetail, _carCost, _carLoanOrBankDetail, _showroomName, _showroomAddress , _showroomId, _issuedDate, _additionalDetail);
        vinToShowroomDataId[_vin].push(showroomDataId);
        showroomDataIds.push(showroomDataId);

        return showroomDataId;
    }


    function addInsuranceData(bytes32 _vin, bytes32 _insuranceNumber, bytes32 _numOfInsurance, bytes32 _insuranceDetail , bytes32 _insuranceId , bytes32 _insuranceCompanyName, bytes32 _insuranceCompanyAddress , uint256 _issuedDate, bytes32 _additionalDetail) public onlyOwner returns (bytes32) {
        require(InsuranceOwners[msg.sender] == true);

        bytes32 insuranceDataId = keccak256(abi.encodePacked( _vin,  _insuranceNumber, _numOfInsurance , _insuranceDetail , _insuranceId , _insuranceCompanyName, _insuranceCompanyAddress , _issuedDate,  _additionalDetail));

        idToInsuranceData[insuranceDataId] = insuranceData(_vin,  _insuranceNumber, _numOfInsurance , _insuranceDetail , _insuranceId , _insuranceCompanyName, _insuranceCompanyAddress , _issuedDate,  _additionalDetail);
        vinToInsuranceDataId[_vin].push(insuranceDataId);
        insuranceDataIds.push(insuranceDataId);

        return insuranceDataId;
    }


    function getMechanicDataByVin1(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[], bytes32[] , bytes32[]) {
        bytes32[] mechanicDataId = vinToMechanicDataId[_vin];

        bytes32[] memory vin = new bytes32[](mechanicDataId.length);
        bytes32[] memory shopId = new bytes32[](mechanicDataId.length);
        bytes32[] memory shopName = new bytes32[](mechanicDataId.length);
        bytes32[] memory shopAddress = new bytes32[](mechanicDataId.length);
        bytes32[] memory carDetail = new bytes32[](mechanicDataId.length);

        for (uint i = 0; i < mechanicDataId.length; i++) {
            mechanicData memory data = idToMechanicData[mechanicDataId[i]];

            vin[i] = data.vin;
            shopId[i] = data.shopId;
            shopName[i] = data.shopName;
            shopAddress[i]= data.shopAddress;
            carDetail[i] = data.carDetail;
        }
        return (vin, shopId, shopName, shopAddress, carDetail);
    }


    function getMechanicDataByVin2(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[], uint256[], bytes32[]) {
        bytes32[] mechanicDataId = vinToMechanicDataId[_vin];

        bytes32[] memory workDescription = new bytes32[](mechanicDataId.length);
        bytes32[] memory moneyCharged = new bytes32[](mechanicDataId.length);
        bytes32[] memory typeOfWork = new bytes32[](mechanicDataId.length);
        uint256[] memory issuedDate = new uint256[](mechanicDataId.length);
        bytes32[] memory additionalDetail = new bytes32[](mechanicDataId.length);

        for (uint i = 0; i < mechanicDataId.length; i++) {
            mechanicData memory data = idToMechanicData[mechanicDataId[i]];

            workDescription[i] = data.workDescription;
            moneyCharged[i] = data.moneyCharged;
            typeOfWork[i] = data.typeOfWork;
            issuedDate[i] = data.issuedDate;
            additionalDetail[i] = data.additionalDetail;
        }
        return (workDescription ,moneyCharged, typeOfWork, issuedDate, additionalDetail);
    }

    function getInsuranceDataByVin1(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[], bytes32[], bytes32[]) {
        bytes32[] insuranceDataId = vinToInsuranceDataId[_vin];

        bytes32[] memory vin = new bytes32[](insuranceDataId.length);
        bytes32[] memory insuranceNumber = new bytes32[](insuranceDataId.length);
        bytes32[] memory numOfInsurance = new bytes32[](insuranceDataId.length);
        bytes32[] memory insuranceDetail = new bytes32[](insuranceDataId.length);
        bytes32[] memory insuranceId = new bytes32[](insuranceDataId.length);

        for (uint i = 0; i < insuranceDataId.length; i++) {
            insuranceData memory data = idToInsuranceData[insuranceDataId[i]];

            vin[i] = data.vin;
            insuranceNumber[i] = data.insuranceNumber;
            numOfInsurance[i] = data.numOfInsurance;
            insuranceDetail[i] = data.insuranceDetail;
            insuranceId[i] = data.insuranceId;
        }
        return (vin, insuranceNumber ,numOfInsurance, insuranceDetail, insuranceId);
    }

    function getInsuranceDataByVin2(bytes32 _vin) public view returns (bytes32[], bytes32[],  uint256[], bytes32[]) {
        bytes32[] insuranceDataId = vinToInsuranceDataId[_vin];


        bytes32[] memory insuranceCompanyName = new bytes32[](insuranceDataId.length);
        bytes32[] memory insuranceCompanyAddress = new bytes32[](insuranceDataId.length);
        uint256[] memory issuedDate = new uint256[](insuranceDataId.length);
        bytes32[] memory additionalDetail = new bytes32[](insuranceDataId.length);

        for (uint i = 0; i < insuranceDataId.length; i++) {
            insuranceData memory data = idToInsuranceData[insuranceDataId[i]];

            insuranceCompanyName[i] = data.insuranceCompanyName;
            insuranceCompanyAddress[i] = data.insuranceCompanyAddress;
            issuedDate[i] = data.issuedDate;
            additionalDetail[i] = data.additionalDetail;
        }
        return (insuranceCompanyName ,insuranceCompanyAddress, issuedDate, additionalDetail);
    }




    function getMotorDeptDataByVin1(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[], bytes32[], bytes32[]) {
        bytes32[] motorDeptDataId = vinToMotorDeptDataId[_vin];


        bytes32[] memory vin = new bytes32[](motorDeptDataId.length);
        bytes32[] memory ownerName = new bytes32[](motorDeptDataId.length);
        bytes32[] memory regId = new bytes32[](motorDeptDataId.length);
        bytes32[] memory milesOnCar = new bytes32[](motorDeptDataId.length);
        bytes32[] memory modelDetail = new bytes32[](motorDeptDataId.length);

        for (uint i = 0; i < motorDeptDataId.length; i++) {
            motorDeptData memory data = idToMotorDeptData[motorDeptDataId[i]];

            vin[i] = data.vin;
            ownerName[i] = data.ownerName;
            regId[i] = data.regId;
            milesOnCar[i] = data.milesOnCar;
            modelDetail[i] = data.modelDetail;
        }
        return (vin, ownerName, regId, milesOnCar, modelDetail);
    }


    function getMotorDeptDataByVin2(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[] , uint256[], bytes32[]) {
        bytes32[] motorDeptDataId = vinToMotorDeptDataId[_vin];

        bytes32[] memory numberPlate = new bytes32[](motorDeptDataId.length);
        bytes32[] memory motorDeptCity = new bytes32[](motorDeptDataId.length);
        bytes32[] memory motorDeptAddress = new bytes32[](motorDeptDataId.length);
        uint256[] memory issuedDate = new uint256[](motorDeptDataId.length);
        bytes32[] memory additionalDetail = new bytes32[](motorDeptDataId.length);

        for (uint i = 0; i < motorDeptDataId.length; i++) {
            motorDeptData memory data = idToMotorDeptData[motorDeptDataId[i]];

            numberPlate[i] = data.numberPlate;
            motorDeptCity[i] = data.motorDeptCity;
            motorDeptAddress[i] = data.motorDeptAddress;
            issuedDate[i] = data.issuedDate;
            additionalDetail[i] = data.additionalDetail;
        }
        return (numberPlate, motorDeptCity, motorDeptAddress , issuedDate, additionalDetail);
    }




    function getShowroomDataByVin1(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[], bytes32[] ,bytes32[]) {
        bytes32[] showroomDataId = vinToShowroomDataId[_vin];


        bytes32[] memory vin = new bytes32[](showroomDataId.length);
        bytes32[] memory ownerDetail = new bytes32[](showroomDataId.length);
        bytes32[] memory modelDetail = new bytes32[](showroomDataId.length);
        bytes32[] memory carCost = new bytes32[](showroomDataId.length);
        bytes32[] memory carLoanOrBankDetail = new bytes32[](showroomDataId.length);


        for (uint i = 0; i < showroomDataId.length; i++) {
            showroomData memory data = idToShowRoomData[showroomDataId[i]];

            vin[i] = data.vin;
            ownerDetail[i] = data.ownerDetail;
            modelDetail[i] = data.modelDetail;
            carCost[i] = data.carCost;
            carLoanOrBankDetail[i] = data.carLoanOrBankDetail;
        }
        return (vin, ownerDetail, modelDetail, carCost ,carLoanOrBankDetail);
    }

    function getShowroomDataByVin2(bytes32 _vin) public view returns (bytes32[], bytes32[], bytes32[] ,uint256[], bytes32[]) {
        bytes32[] showroomDataId = vinToShowroomDataId[_vin];


        bytes32[] memory showroomName = new bytes32[](showroomDataId.length);
        bytes32[] memory showroomAddress = new bytes32[](showroomDataId.length);
        bytes32[] memory showroomId = new bytes32[](showroomDataId.length);
        uint256[] memory issuedDate = new uint256[](showroomDataId.length);
        bytes32[] memory additionalDetail = new bytes32[](showroomDataId.length);

        for (uint i = 0; i < showroomDataId.length; i++) {
            showroomData memory data = idToShowRoomData[showroomDataId[i]];

            showroomName[i] = data.showroomName;
            showroomAddress[i] = data.showroomAddress;
            showroomId[i] = data.showroomId;
            issuedDate[i] = data.issuedDate;
            additionalDetail[i] = data.additionalDetail;
        }
        return (showroomName, showroomAddress, showroomId, issuedDate, additionalDetail);
    }
}