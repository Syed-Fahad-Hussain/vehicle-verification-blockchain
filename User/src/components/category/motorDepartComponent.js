import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table';
import Divider from 'material-ui/Divider'

export default class DepartmentComponent extends Component {
  render() {
    return (
      <div>
          <h5>Motor Vehicle Department Data</h5>
          <Divider/>
    {this.props.data.map((item, i) => {
        return(
<Table key = {i}>
<TableBody displayRowCheckbox = {false}>
      <TableRow>
        <TableRowColumn>Vin</TableRowColumn>
        <TableRowColumn>{item.vin}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Owner Name</TableRowColumn>
        <TableRowColumn>{item.ownerName}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Registration ID</TableRowColumn>
        <TableRowColumn>{item.regId}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Mileage</TableRowColumn>
        <TableRowColumn>{item.milesOnCar}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Number Plate</TableRowColumn>
        <TableRowColumn>{item.numberPlate}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Motor Department City</TableRowColumn>
        <TableRowColumn>{item.motorDeptCity}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Address</TableRowColumn>
        <TableRowColumn>{item.motorDeptAddress }</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Issued Date</TableRowColumn>
        <TableRowColumn>{item.issuedDate}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Additional Details</TableRowColumn>
        <TableRowColumn>{item.additionalDetails}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
        )
    })}
    
      </div>
    );
  }
}

