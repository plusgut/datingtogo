import React, { Component } from 'react';
// import api_key from '../../Config/google';
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import { BaiduMap } from 'react-baidu-map';
import MAP_BOX from '../../Config/mapbox'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: {
        lat: null,
        long: null,
      },
      zoom: 11,
    };

    navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.handleError.bind(this));
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

  render() {
    var position = [this.state.pos.long, this.state.pos.lat];
/*
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={position}
        onClick={props.onMapClick}
      >
        {props.markers.map((marker, index) => (
          <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(index)}
          />
         ))}
       </GoogleMap>
    ));*/
    return (
      <div>
        <span>Hello <span>{this.props.user.username}</span></span>
        {this.state.pos.lat && this.state.pos.long &&
                  <ReactMapboxGl
  style="mapbox://styles/mapbox/streets-v8"
  accessToken={MAP_BOX}
  center={position}
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</ReactMapboxGl>
             
        }
      </div>
    );
  }
}

export default MapContainer;
