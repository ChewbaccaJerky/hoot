# Hoot
![Home Page](https://res.cloudinary.com/johnrobin/image/upload/v1520753911/Screen_Shot_2018-03-10_at_11.37.57_PM_ilyy5k.png)

[__Hoot__](https://hoots.herokuapp.com/), a Yelp clone, is an application which helps people find great local businesses and places where users can rate and write reviews based on their experiences. It utilizes `Ruby on Rails, React/Redux, PostgreSQL, Google Places API, and Google Maps API`.

![New Businesses](./screenshots/NewBizPage.png)

## Features
  + Cross Platform Compatibility
    + Utilizing responsive design and CSS3, the application is both mobile and desktop compatible.
  + Business
    + Using `Google Places API`, the app is populated with data of actual businesses and locations.
  + Reviews
    + Allows users to rate and review each location based on their experiences.
  + Search
    + Searches places across the world depending on a user's criteria.
  + Map
    + Renders markers of locations with `Google Maps API`.

## Cross Platform Compatiblity
![Mobile](https://res.cloudinary.com/johnrobin/image/upload/v1520754551/homepage_mv7v2t.gif)

<!-- ![Mobile to Desktop](https://res.cloudinary.com/johnrobin/image/upload/c_scale,w_320/v1520753548/giphy_1_rgy2sb.gif) -->

## Business Page

![Business Page](./screenshots/BizPage.png)
  Populated with `Googles Places API` which renders all the information into the components. The data displayed are current and real time information of the businesses.

```
def show
  place_id = params[:id]
  url = "https://maps.googleapis.com/maps/api/place/details/json?"
  response = RestClient.get url, {params: {
                                    key: ENV["google_api_key"],
                                    placeid: place_id }}
  response = JSON.parse(response)

  if response["status"] == "INVALID_REQUEST"
    render json: ["Invalid Request"], status: 404
  else
    @business = response["result"]
    ratings = Review.where('place_id' =>            @business["place_id"]).average(:ratings)
    @business["ratings"] = if ratings.nil? then 5 else ratings.to_f end
    render '/api/businesses/show'
  end
end
```
Hoot is using a server-side http call to retrieve information of a business then serving it to the React frontend while following a redux cycle.

## Maps And Search
![Maps and Search](https://res.cloudinary.com/johnrobin/image/upload/v1520754006/Screen_Shot_2018-03-10_at_11.39.38_PM_fr7n27.png)

### Google Places API Integration

  The backend is using the http call to retrieve the information with regards to the search params, then served to the front end to be displaced in an index component. Hoot gives the accessibility to it's users to make searches for any businesses or locations they can think of. New places are right around the corner to be discovered.

![Search Tokyo](./screenshots/TokyoSearch.png)

## Google Maps API Integration

  As the backend retrieve and serve data to the frontend, Hoot places and renders markers onto the map to be displayed to it's users.

```
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
```

## Future Direction of The Project
  + Future Features
    + User Profile
    + Followers
    + Include images to review
    + Allow users to add images to business pages.
  + Changes
    + Move Sign Up and  Login Pages to Modals
