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


    #handle price level
    if price_level != nil
      @businesses.select! do |biz|
        biz["price_level"] == price_level.to_i
      end
    end

    if opened != nil
      @businesses.select! do |biz|
        biz["opening_hours"]["open_now"].to_s == opened
      end
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
      render '/api/businesses/show'
      # render json: @business
    end
  end
end
