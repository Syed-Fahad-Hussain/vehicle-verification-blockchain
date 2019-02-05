import React from 'react';
import ReactDOM from 'react-dom';
import BasicRouting from './config/routes';
import store from './store';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <BasicRouting />
  </MuiThemeProvider>
);

ReactDOM.render( <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));