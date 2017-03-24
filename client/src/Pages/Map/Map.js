import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <span>Hello {this.props.user.username}</span>
    );
  }
}

export default Map;
