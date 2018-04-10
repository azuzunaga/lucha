class Api::RoutesController < ApplicationController
  def index
  end

  def show
  end

  def create
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
