import React from 'react';
import {List, ListItem} from 'material-ui/List';
import history from '../history'

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);
  }

  changeRoute(route){
    history.push(route)
  }

 
  render() {
      const style = {
          color : '#E0E0E0'
      }
    return (
        <List hoverColor = "grey">
        <ListItem primaryText="Showroom" hoverColor = "#EEEEEE"  style = {style} onClick = {this.changeRoute.bind(this, '/showroom')}/>
        <ListItem primaryText="Insurance" overColor = "#EEEEEE" style = {style} onClick = {this.changeRoute.bind(this, '/insurance')} />
        <ListItem primaryText="Vehicle Department" overColor = "#EEEEEE" style = {style}  onClick = {this.changeRoute.bind(this, '/department')} />
        <ListItem primaryText="Mechanics" hoverColor = "#EEEEEE"  style = {style}  onClick = {this.changeRoute.bind(this, '/mechanic')}/>
      </List>
    );
  }
}
 
export default SidebarContent;