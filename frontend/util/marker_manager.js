
class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
    this.infoWindows = [];
  }

  updateMarkers(businesses) {
    const bizArray = Object.values(businesses);

    for(let biz in bizArray) {
      if(!this.markers[bizArray[biz].place_id]) {
        this.markers[bizArray[biz].place_id] = new google.maps.Marker({
          position: bizArray[biz].location,
          title: bizArray[biz].name,
          animation: google.maps.Animation.DROP
        });

        this.addInfoWindow(bizArray[biz], this.markers[bizArray[biz].place_id]);
      }
    }

    this.moveToLocation(bizArray[0].location);
    this.drop();
  }

  drop() {
    for(let mark in this.markers) {
      setTimeout(() => {
        if(this.markers[mark]){this.markers[mark].setMap(this.map)}
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
    // console.log(business);
    const info =
      `<div class="marker-info">
        <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&key=AIzaSyAwBuCeQEcarQNOUY8c9qztNejHl17RmM0&photoreference=${business.photo_reference}" />
        <a href="/#/businesses/${business.place_id}"><h1>${business.name}</h1></a>
      </div>`
    ;

    let infowindow = new google.maps.InfoWindow({
      content: info
    });

    let marker = this.markers[business.place_id];

    marker.addListener('click', ()=>{
      infowindow.open(this.map, marker);

      for (var i = 0; i < this.infoWindows.length; i++) {
        this.infoWindows[i].close();
      }
      this.infoWindows = [infowindow];
    });
  }

}

export default MarkerManager;
