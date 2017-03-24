import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    var gender = [
      'Mann',
      'Frau',
      'Sonstiges'
    ];
    
    this.state = {
      user: {},
      infos: [{
        label: 'Username',
        key: 'myself',
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

  submit() {

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
          <div className="row">
            <div className="col-xs-6">
              {info.label}
            </div>
            <div className="col-xs-6">
              {info.input(info)}
            </div>
          </div>
        )}
      </form>
    );
  }

  inputText(info) {
    return (
      <input type="text" onChange={this.setFromEvent.bind(this, info.key)} />
    );
  }

  optioninfo(info) {
    return (
      <div>
        {info.options.map((option, optionIndex) => 
          <div className="selection" onClick={this.setValue.bind(this, info.key, option)} >{option}</div>
        )}
      </div>
    );
  }
}

export default Register;
