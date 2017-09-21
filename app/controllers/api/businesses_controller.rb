require 'rest-client'
class Api::BusinessesController < ApplicationController

  def index
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: "Restaurants in San Francisco", }}

    @businesses = JSON.parse(response)["results"]

    render '/api/businesses/index'
  end

  def show
    place_id = params[:id]
    url = "https://maps.googleapis.com/maps/api/place/details/json?"
    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              placeid: place_id }}

    @business = JSON.parse(response)["result"]

    render '/api/businesses/show'
    # render json: response
  end

end
