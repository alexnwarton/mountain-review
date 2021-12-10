class ResortsController < ApplicationController
  before_action :set_resort, only: [:show, :update, :destroy]

  # GET /resorts
  def index
    @resorts = Resort.all

    render json: @resorts
  end

  # GET /resorts/1
  def show
    render json: @resort
  end

  # POST /resorts
  def create
    @resort = Resort.new(resort_params)

    if @resort.save
      render json: @resort, status: :created, location: @resort
    else
      render json: @resort.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /resorts/1
  def update
    if @resort.update(resort_params)
      render json: @resort
    else
      render json: @resort.errors, status: :unprocessable_entity
    end
  end

  # DELETE /resorts/1
  def destroy
    @resort.destroy
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
end
