import React, { Component } from 'react';

import Greeting from './Pages/Greeting/Greeting';
import Map from './Pages/Map/Map';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  setUser(value) {
    this.setState({
      user: value
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.user !== null && 
          <Map user={this.state.user} logout={this.setUser.bind(this, null)} />
        }
        {this.state.user === null && 
          <Greeting setUser={this.setUser.bind(this)} />
        }
      </div>
    );
  }
}

export default App;
