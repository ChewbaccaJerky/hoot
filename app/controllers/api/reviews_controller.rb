class Api::ReviewsController < ApplicationController
  def index
    places_id = params[:business_id]
    @reviews = Review.find_by(place_id: place_id)
  end

  def show
    
  end
end
