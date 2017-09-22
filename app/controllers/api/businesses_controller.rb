require 'rest-client'
class Api::BusinessesController < ApplicationController

  def index
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: "Restaurants in San Francisco", }}

    @businesses = JSON.parse(response)["results"]

    # render '/api/businesses/index'
    render json: response
  end

  def show
    place_id = params[:id]
    url = "https://maps.googleapis.com/maps/api/place/details/json?"
    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              placeid: place_id }}

    response = JSON.parse(response)

    if response["status"] == "INVALID_REQUEST"
      render json: ["Invalid Request"], status: 404
    else
      @business = response["result"]
      render '/api/businesses/show'
    end
  end
end
