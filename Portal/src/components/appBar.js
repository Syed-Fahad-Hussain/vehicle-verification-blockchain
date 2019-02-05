import React from 'react';
import AppBar from 'material-ui/AppBar';
import history from '../config/history'
import logout from '../images/logout.png'
import FlatButton from "material-ui/FlatButton";

// import IconButton from 'material-ui/IconButton';
// import ActionLogout from 'material-ui/svg-icons/action/logout';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
function logoutHandler(){
  history.push('/')
}

const AppBarExampleIcon = (props) => (
  <AppBar
  title={<div style = {{width :  'fit-content', margin : 'auto'}}>Vehicle Verification Panel</div>}
  iconElementLeft={<p style = {{color : 'white'}}>{props.obj.name}</p>}
  iconElementRight={<div> 
      <p style = {{color : 'white', display : 'inline-block'}}>ID:{props.obj.uid}</p>
      <span onClick = {logoutHandler}>
          <FlatButton label="logout" secondary={true} />
      </span>
     </div> }
  />
  );

export default AppBarExampleIcon;
