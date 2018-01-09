require 'rest-client';
class Api::SearchesController < ApplicationController

  def search
    searchParams = params[:searchParams]
    searchParams = searchParams.split('+').join(' ')

    url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

    response = RestClient.get url, {params: { key: ENV["google_api_key"],
                                              query: searchParams}}

    @businesses = JSON.parse(response)["results"]
    # add rating to each business
    @businesses.map! do |business|
      ratings = Review.where('place_id' => business['place_id']).average(:ratings)
      business["ratings"] = if ratings.nil? then 5 else ratings.to_f end
      business
    end
    render '/api/searches/search.json.jbuilder'
  end
end
