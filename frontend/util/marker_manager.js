
class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    const bizArray = Object.values(businesses);

    bizArray.forEach(biz => {
      if(!this.markers[biz.place_id]) {
        this.markers[biz.place_id] = new google.maps.Marker({
          position: biz.location,
          title: biz.name,
          animation: google.maps.Animation.DROP
        });

        this.markers[biz.place_id].addListener('click', this.toggleBounce);
      }
    });
    this.moveToLocation(bizArray[0].location);
    this.drop();
  }

  toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  drop(){
    for(let mark in this.markers) {
      setTimeout(() => {
        this.markers[mark].setMap(this.map);
      }, 200);
    }
  }

  clear() {
    for(let mark in this.markers) {
      this.markers[mark].setMap(null);
      delete this.markers[mark];
    }
  }

  moveToLocation(location) {
    const center = new google.maps.LatLng(location.lat, location.lng);
    this.map.panTo(center);
  }
}

export default MarkerManager;
