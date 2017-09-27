require 'rest-client'
class Api::BusinessesController < ApplicationController

  def index
    #TODO: handle filters
    price_level = params[:price_level]
    opened = params[:opened]
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: "Restaurants in San Francisco"}}

    @businesses = JSON.parse(response)["results"]

    @businesses.map do |biz|
      ratings = Review.where('place_id' => biz["place_id"]).average(:ratings)
      biz["ratings"] = if ratings.nil? then 5 else ratings.to_f end
      biz
    end

    # render json: @businesses
    render '/api/businesses/index'
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
      ratings = Review.where('place_id' => @business["place_id"]).average(:ratings)
      @business["ratings"] = if ratings.nil? then 5 else ratings.to_f end
      render '/api/businesses/show'
      # render json: @business
    end
  end
end
