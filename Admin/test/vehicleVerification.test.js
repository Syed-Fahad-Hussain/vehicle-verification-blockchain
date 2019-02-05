const assert = require('assert');
// Getting the JSON compiled code for the Contract
const compiledVehicleInstance = artifacts.require("VehicleVerification.sol");


// The boilerplate code for configuring web3 with ganache-provider running on local host
const Web3 = require('web3'),
    web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    web3 = new Web3(web3Provider);

let accounts, vehicleController;

//TESTS
contract('VehicleController', function (accounts) {

    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
        vehicleController = await compiledVehicleInstance.deployed();
    });

    it("only allows owner to add showroom , mechanic , insurance and motorDept owners", async function () {
        await vehicleController.addShowroomOwner(accounts[1]);
        await vehicleController.addInsuranceOwner(accounts[1]);
        await vehicleController.addMotorDeptOwner(accounts[1]);
        await vehicleController.addMechanicOwner(accounts[1]);

        assert.equal(await vehicleController.InsuranceOwners.call(accounts[1]) , true);
        assert.equal(await vehicleController.MotorDeptOwners.call(accounts[1]) , true);
        assert.equal(await vehicleController.MechanicOwners.call(accounts[1]) , true);
        assert.equal(await  vehicleController.ShowroomOwners.call(accounts[1])  , true);
    });

    it("removes showroom , mechanic , insurance and motorDept owners" , async function () {
        await vehicleController.removeShowroomOwner(accounts[1]);
        await  vehicleController.removeInsuranceOwner(accounts[1]);
        await vehicleController.removeMotorDeptOwner(accounts[1]);
        await vehicleController.removeMechanicOwner(accounts[1]);

        assert.equal(await vehicleController.InsuranceOwners.call(accounts[1]) , false);
        assert.equal(await vehicleController.MotorDeptOwners.call(accounts[1]) , false);
        assert.equal(await vehicleController.MechanicOwners.call(accounts[1]) , false);
        assert.equal(await  vehicleController.ShowroomOwners.call(accounts[1])  , false);
    });

    it("creates mechanic data " ,async function () {
        await vehicleController.addMechanicOwner(accounts[0]);

        await vehicleController.addMechanicData("CE-1454" , "4234E9","THE MECHANIC","UBIT Circular road",
                                                "4 wheel,accord 2017,Honda,4 door","Paint job","3000$",
                                                 "Paint",1543734997,"No additional details");


        console.log(await vehicleController.getMechanicDataByVin2("CE-1454"));

    });

    it("creates showroom data" , async function () {
        await vehicleController.addShowroomOwner(accounts[0]);
        await vehicleController.addShowroomData("CE-7534" , "Tahahaq,3392733778373" , "4 wheel,accord 2017,Honda,4 door",
                                                "4200" , "Berkley bank loan","Ford showroom" , "al hilal socierty" , "67272787",
                                                    1543734997,"No additional details");

        console.log(await vehicleController.getShowroomDataByVin1("CE-7534"));
        console.log(await vehicleController.getShowroomDataByVin2("CE-7534"));
    })

});