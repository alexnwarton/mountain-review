class ResortsController < ApplicationController
  before_action :is_admin?, only: [:create, :update, :destroy]
  before_action :set_resort, only: [:show, :update, :destroy]

  # GET /resorts
  def index
    @resorts = Resort.all

    render json: @resorts
  end

  # GET /resorts/1
  def show
    render json: @resort, include: :reviews, status: :ok
  end

  # POST /resorts
  def create
    if @current_user
      @resort = Resort.new(resort_params)

      if @resort.save
        render json: @resort, status: :created
      else
        render json: @resort.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /resorts/1
  def update
    if @current_user
      if @resort.update(resort_params)
        render json: @resort
      else
        render json: @resort.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /resorts/1
  def destroy
    if @current_user
      @resort.destroy
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resort
      @resort = Resort.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def resort_params
      params.require(:resort).permit(:name, :city, :state, :country, :description, :img_url, :average_rating)
    end

    def is_admin?
      @current_user = User.find(params[:id])
      if @current_user.is_admin == true
        @current_user
      end

    end
end
