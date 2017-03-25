import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
    }
  }

  setRegister(value) {
    this.setState({
      register: value,
    });
  }

  render() {
    return (
      <div className="welcome">
        {this.state.register === false &&
          <Login setUser={this.props.setUser} register={this.setRegister.bind(this, true)} />
        }
        {this.state.register === true &&
          <Register setUser={this.props.setUser} />
        }
      </div>
    );
  }
}

export default Greeting;
