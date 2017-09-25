require 'rest-client';
class Api::SearchesController < ApplicationController

  def search
    searchParams = params[:searchParams]
    searchParams = searchParams.split('+').join(' ')
    puts searchParams

    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: searchParams}}

    @businesses = JSON.parse(response)["results"]
    # render json: response
    render '/api/searches/search.json.jbuilder'
  end


end
