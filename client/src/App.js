import React, { Component } from 'react';

import Greeting from './Pages/Greeting/Greeting';
import Map from './Pages/Map/Map';
import Header from './Pages/Header/Header';
import debug from './Config/debug';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

const DEBUG_USER = {
  username: 'plusgut'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  setUser(user) {
    this.setState({user});
  }

  showLogo() {
    this.setState({
      finished: true
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.finished === true && 
          <img src="BigLogo.png" alt="biglogo" />
        }

        {this.state.finished !== true && 
          <div>
            <Header showLogo={this.showLogo.bind(this)} />
            {this.state.user !== null && 
              <Map user={this.state.user} logout={this.setUser.bind(this, null)} />
            }
            {this.state.user === null && 
              <Greeting setUser={this.setUser.bind(this)} />
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
