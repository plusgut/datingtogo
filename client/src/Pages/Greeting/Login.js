import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }
  
  submit(evt) {
    this.props.setUser(this.state.user);
    evt.preventDefault();
  }
  
  setUser(evt) {
    this.setState({
      user: evt.target.value,
    });
  }

  setPassword(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <div className="row">
            <div className="col-xs-6">
              User
            </div>
            <div className="col-xs-6">
              <input type="text" onChange={this.setUser.bind(this)} value={this.state.user}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              Password
            </div>
            <div className="col-xs-6">
              <input type="text" onChange={this.setPassword.bind(this)} value={this.state.password}/>
            </div>
          </div>
          <input type="submit" value="Login!"/>
          <input type="button" value="Register!" onClick={this.props.register}/>
        </form>
      </div>
    );
  }
}

export default Login;
