class Api::ReviewsController < ApplicationController
  def index
    # @reviews = Review.find_by(place_id: params[:business_id])
    @reviews = Review.where(place_id: params[:business_id])
    puts @reviews
  end

  def create
    @review = Review.new(review_params)
    @review.place_id = params[:business_id]
    @review.author_id = current_user.id
    @review.author_username = current_user.username

    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def edit
    @review = current_user.reviews.find_by_id(params[:id])
    if @review
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def update
    @review = current_user.reviews.find_by_id(params[:id])
    puts "new params"
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def destroy
    @review = current_user.reviews.find_by_id(params[:id])
    @review.destroy!
    render 'api/reviews/show'
  end

  private
  def review_params
    params.require(:review).permit(:ratings, :body)
  end
end
