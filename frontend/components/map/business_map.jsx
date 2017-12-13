import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.businesses);
    this.MarkerManager.drop();
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.clear();
    this.MarkerManager.updateMarkers(nextProps.businesses);
  }

  render (){
    return(
      <div className="map-container" ref={ map => this.mapNode = map }>
        Map is not working....
      </div>
    );
  }
}

export default BusinessMap;
