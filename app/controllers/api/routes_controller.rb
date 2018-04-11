class Api::RoutesController < ApplicationController
  before_action :require_logged_in

  def index
    @routes = current_user.routes
    # render "api/routes/index"
  end

  def create
    @route = Route.new(route_params)

    if @route.save
      render "api/routes/index"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  private

  def route_params
    params.require(:route).
      permit(
        :title,
        :description,
        :author_id,
        :polyline,
        :image_url,
        :distance,
        :elevation,
        :duration,
        :sport,
      )
  end
end
