class Api::ActivitiesController < ApplicationController
  def index
    @activities = current_user.activities
  end

  def create
    @activity = Activity.parse(activity_params)

    if @activity.save
      render 'api/activities/index'
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  private

  def activity_params
    params.require(:activity).
      permit(
        :title,
        :user_id,
        :polyline,
        :big_image_url,
        :hour,
        :minute,
        :second,
        :elevation,
        :sport,
        :date,
        :time,
        :distance
      )
  end
end
