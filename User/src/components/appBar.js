import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = (props) => (
  <AppBar
    title={<div style = {{width :  'fit-content', margin : 'auto'}}>Vehicle Verification Panel</div>}
    // iconElementLeft={<p style = {{color : 'white'}}>{props.obj.name}</p>}
    // iconElementRight={<p style = {{color : 'white'}}>ID:{props.obj.uid}</p>}
  />
);

export default AppBarExampleIcon;
