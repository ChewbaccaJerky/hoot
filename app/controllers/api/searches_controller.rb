require 'rest-client';
class Api::SearchesController < ApplicationController

  def search
    searchParams = params[:searchParams]
    searchParams = searchParams.split('+').join(' ')

    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: searchParams}}

    @businesses = JSON.parse(response)["results"]

    render '/api/searches/search.json.jbuilder'
  end
end
