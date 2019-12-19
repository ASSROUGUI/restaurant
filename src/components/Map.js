
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

export class Myloc extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
 
  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return(
        <div>
<Map
          google={google}
          zoom={10}
          initialCenter={userLocation}>
          <Marker position={userLocation} />
          {/* <Polyline path={userLocation}   style="5px solid blue" /> */}
          {/* <Polyline
  coordinates={[
    {x: 10, y: 20}

  ]}
  style="5px solid orange"
  closed={true}
/> */}
          <Marker position={{ lat: 26.300782772672, lng: 50.200918614864}} />
        </Map>
        </div>
    )

  
    
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
})(Myloc);