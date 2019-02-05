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
class MechanicComponent extends Component {
  render() {
    return (
      <div>
          <h5>Mechanic Data</h5>
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
        <TableRowColumn>Shop ID</TableRowColumn>
        <TableRowColumn>{item.shopId}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Shop Name</TableRowColumn>
        <TableRowColumn>{item.shopName}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Shop Address</TableRowColumn>
        <TableRowColumn>{item.shopAddress}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Car Details</TableRowColumn>
        <TableRowColumn>{item.carDetails}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Work Description</TableRowColumn>
        <TableRowColumn>{item.workDescription}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Money Charged</TableRowColumn>
        <TableRowColumn>{item.moneyCharged}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Type Of Work</TableRowColumn>
        <TableRowColumn>{item.typeOfWork}</TableRowColumn>
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

export default MechanicComponent;
