import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table';
import Divider from 'material-ui/Divider';

export default class ShowroomComponent extends Component {
  render() {
    return (
      <div>
          <h5>Showroom Data</h5>
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
        <TableRowColumn>Car Cost</TableRowColumn>
        <TableRowColumn>{item.carCost}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Car Loan</TableRowColumn>
        <TableRowColumn>{item.carLoan}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Model Details</TableRowColumn>
        <TableRowColumn>{item.modelDetail}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Owner Details</TableRowColumn>
        <TableRowColumn>{item.ownerDetail}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Showroom Address</TableRowColumn>
        <TableRowColumn>{item.showroomAddress}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Showroom ID</TableRowColumn>
        <TableRowColumn>{item.showroomId}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Showroom Name</TableRowColumn>
        <TableRowColumn>{item.showroomName}</TableRowColumn>
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

