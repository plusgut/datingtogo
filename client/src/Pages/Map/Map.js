import React, { Component } from 'react';
// import api_key from '../../Config/google';
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import { BaiduMap } from 'react-baidu-map';
import MAP_BOX from '../../Config/mapbox'
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import adapter from '../../Helper/adapter';

var POLL_TIME = 6000;

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: {
        lat: null,
        long: null,
      },
      zoom: 14,
      users: [],
      uncovered: [],
    };

    this.updateUsers();
    navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.handleError.bind(this));
  }

  updateUsers() {
    adapter('users').then((users) => {
      this.setState({users});
      setTimeout(this.updateUsers.bind(this), POLL_TIME);
    });
  }
  setPosition (geoposition) {
    this.setState(function(state) {
      state.pos = {
        lat: geoposition.coords.latitude,
        long: geoposition.coords.longitude
      };
      return state;
    });
  }

  handleError() {
    alert('Geolocation wasnt possible');
  }

  getImage(user, index) {
    if(user.username === this.props.user.username) {
      return 'pin.png';
    } else if(this.state.uncovered.indexOf(index) !== -1) {
      return user.username +'.png';
    } else {
      return "heart.png";
    }
  }

  uncover(userIndex) {
    this.setState({
      uncovered: this.state.uncovered.concat([userIndex])
    });
  }

  render() {
    var position = [this.state.pos.long, this.state.pos.lat];
    return (
      <div>
        {this.state.pos.lat && this.state.pos.long &&
          <ReactMapboxGl
                style="mapbox://styles/mapbox/streets-v8"
        zoom={[this.state.zoom]}
                accessToken={MAP_BOX}
                center={position}
                containerStyle={{
                  height: "70vh",
                  width: "100%",
                }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
            {this.state.users.map((user, index) =>
              <Marker key={index} coordinates={user.position} anchor="bottom">
                <img src={this.getImage(user, index)} width="50px" height="50px" alt={user.username} onClick={this.uncover.bind(this, index)}/>
              </Marker>
            )}
          </ReactMapboxGl>
        }
      </div>
    );
  }
}

export default MapContainer;
