import React, { Component } from 'react';
// import logo from './media/logo.svg';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import MainPanel from '../MainPanel/MainPanel';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false
    }
  }

  handleChange = () => {
    this.setState({ logged: !this.state.logged });
    // this.props.onBurgerClick(isActive);
  }

  render() {
    return (
      <div className="AppWrapper">
        <MuiThemeProvider>
          <Sidebar isActive={this.state.logged}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MainPanel triggerParentUpdate={this.handleChange} isActive={this.state.logged}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
