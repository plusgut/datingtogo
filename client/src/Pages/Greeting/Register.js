import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [{
        label: 'Ich suche',
        key: 'search',
        options: [
          'Mann',
          'Frau',
          'Sonstiges'
        ],
        value: ''
      }]
    }
  }

  submit() {

  }

  setValue(infoIndex) {

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
              {info.options.map((option, optionIndex) => 
                <div>{option}</div>
              )}
            </div>
          </div>
        )}
      </form>
    );
  }
}

export default Register;
