import React, { Component } from 'react';
import adapter from '../../Helper/adapter';

class Register extends Component {
  constructor(props) {
    super(props);
    var gender = [
      'Mann',
      'Frau',
      'Sonstiges'
    ];
    
    this.state = {
      user: {
        username: 'plusgut',
        myself: 'Mann',
        search: 'Frau',
      },
      infos: [{
        label: 'Username',
        key: 'username',
        input: this.inputText.bind(this),
        option: gender,
      }, {
        label: 'Ich bin',
        key: 'myself',
        input: this.optioninfo.bind(this),
        options: gender,
      }, {
        label: 'Ich suche',
        key: 'search',
        input: this.optioninfo.bind(this),
        options: gender,
      }]
    }
  }

  echo(value) {
    return value;
  }

  setFromEvent(key, evt) {
    this.setValue(key, evt.target.value);
  }

  submit(evt) {
    evt.preventDefault();
    adapter('register', this.state.user).then(setTimeout(this.props.setUser.bind(null, this.state.user), 0));
    
  }

  setValue(key, value) {
    this.setState((state) => {
      state.user[key] = value;
    });
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>

        {this.state.infos.map((info, infoIndex) =>
          <div className="row" key={infoIndex}>
            <div className="col-xs-6">
              {info.label}
            </div>
            <div className="col-xs-6">
              {info.input(info)}
            </div>
          </div>
        )}
        <input type="submit" value="Registrieren!"/>
      </form>
    );
  }

  inputText(info) {

    return (
      <input type="text" onChange={this.setFromEvent.bind(this, info.key)} value={this.state.user[info.key]}/>
    );
  }

  getCurrentClass(key, option) {
    if(this.state.user[key] === option) {
      return 'selection';
    } else {
      return '';
    }
  }

  optioninfo(info) {
    
    return (
      <div>
        {info.options.map((option, optionIndex) => 

          <div key={optionIndex} onClick={this.setValue.bind(this, info.key, option)} className={this.getCurrentClass(info.key, option)}>{option}</div>
        )}
      </div>
    );
  }
}

export default Register;
