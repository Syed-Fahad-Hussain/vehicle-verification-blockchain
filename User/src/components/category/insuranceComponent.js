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

export default class InsuranceComponent extends Component {
  render() {
    return (
      <div>
          <h5>Insurance Data</h5>
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
        <TableRowColumn>Insurance Number</TableRowColumn>
        <TableRowColumn>{item.insuranceNumber}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Number Of Insurance</TableRowColumn>
        <TableRowColumn>{item.numOfInsurance}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Insurance Details</TableRowColumn>
        <TableRowColumn>{item.insuranceDetail}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Insurance ID</TableRowColumn>
        <TableRowColumn>{item.insuranceId}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Insurance Company Name</TableRowColumn>
        <TableRowColumn>{item.insuranceCompanyName }</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Company Address</TableRowColumn>
        <TableRowColumn>{item.insuranceCompanyAddress}</TableRowColumn>
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

