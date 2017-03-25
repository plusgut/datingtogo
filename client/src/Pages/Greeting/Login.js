import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  submit(evt) {
    this.props.setUser({username: this.state.username});
    evt.preventDefault();
  }
  
  setUser(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  setPassword(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="background">
        <form onSubmit={this.submit.bind(this)}>
          <div className="row">
            <div className="col-xs-6">
              User
            </div>
            <div className="col-xs-6">
              <input type="text" className="textfeld" onChange={this.setUser.bind(this)} value={this.state.user}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              Password
            </div>
            <div className="col-xs-6">
              <input type="password" className="textfeld" onChange={this.setPassword.bind(this)} value={this.state.password}/>
            </div>
          </div>
          <input type="submit" className="button" value="Anmelden"/>
          <input type="button" className="button" value="Profil erstellen" onClick={this.props.register}/>
        </form>
      </div>
    );
  }
}

export default Login;
