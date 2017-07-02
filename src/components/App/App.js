import React, { Component } from 'react';
// import logo from './media/logo.svg';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import MainPanel from '../MainPanel/MainPanel';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



class App extends Component {
  render() {
    return (
      <div className="AppWrapper">
        <MuiThemeProvider>
          <Sidebar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MainPanel />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
