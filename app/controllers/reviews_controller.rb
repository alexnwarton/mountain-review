class ReviewsController < ApplicationController
  before_action :set_resort
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_review, only: [:update, :destroy]

  # GET /reviews
  def index

    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @review.user = @current_user

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
      puts @review
      if @review.update(review_params)
        render json: @review
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resort
      @resort = Resort.find(params[:resort_id])
    end

    def set_review
      @review = Review.find(params[:id])
    end

    # If the user id matches the review's user id, set the user for the review
    def set_user_review
      @review = @current_user.reviews.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:title, :body, :rating, :tags, :user_id, :resort_id)
    end
end
