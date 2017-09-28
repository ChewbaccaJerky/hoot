
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
        this.addInfoWindow(biz, this.markers[biz.place_id]);
      }
    });
    this.moveToLocation(bizArray[0].location);
    this.drop();
  }

  toggleBounce() {
    if (this.getAnimation() !== null) {
      this.setAnimation(null);
    } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
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

  addInfoWindow(business) {

    const info =
      `<div class="marker-info">
        <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&key=AIzaSyAwBuCeQEcarQNOUY8c9qztNejHl17RmM0&photoreference=${business.photo_reference}" />
        <a href="/#/businesses/${business.place_id}"><h1>${business.name}</h1></a>
        <h3 class=${business.opened ? 'green' : 'red'}>${ business.opened ? "Open" : "Closed" }</h3>
      </div>`
    ;

    let infowindow = new google.maps.InfoWindow({
      content: info
    });

    let marker = this.markers[business.place_id];

    marker.addListener('click', ()=>{
      infowindow.open(this.map, marker);
    });
  }
}

export default MarkerManager;
