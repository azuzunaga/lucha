class Api::RoutesController < ApplicationController
  before_action :require_logged_in

  def index
    @routes = Route.find_by(author_id: current_user.id)
  end

  def show
    @route = Route.find(params[:route_id])
  end

  def create
    @route = Route.new(route_params)

    if @route.save
      render :index
    else
      render json: @route, status: :unprocessable_entity
    end
  end

  private

  def route_params
    params.require(:route).
      permit(
        :name,
        :description,
        :author_id,
        :polyline,
        :image_url,
        :distance,
        :elevation,
        :duration
      )
  end
end
