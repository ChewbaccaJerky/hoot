require "rest-client"

class RestClientsController < ApplicationController

  def index
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: {key: ENV["google_api_key"],
                                             query: "Restaurants in San Francisco",
                                             rankBy: "distance"}}


    render json: JSON.parse(response)["results"]
    # puts "test....."
    # puts ENV["google_api_key"]
    # render json: ENV["google_api_key"]
  end

end
