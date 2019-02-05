import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BasicRouting from './config/routes';

const App = () => (
    <MuiThemeProvider>
      <BasicRouting />
    </MuiThemeProvider>
  );

ReactDOM.render(  <MuiThemeProvider> <App /> </MuiThemeProvider> , document.getElementById('root'));

