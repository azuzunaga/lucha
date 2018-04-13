# == Schema Information
#
# Table name: activities
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  user_id        :integer          not null
#  polyline       :text             not null
#  big_image_url  :text             not null
#  distance       :float            not null
#  elevation      :float            not null
#  duration       :integer          not null
#  sport          :string           not null
#  start_datetime :datetime         not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  avg_speed      :float
#  pace           :integer
#

class Activity < ApplicationRecord
  validates :title,
            :user_id,
            :distance,
            :elevation,
            :duration,
            :sport,
            :start_datetime, presence: true

  belongs_to :user

  def calculate_speed_and_pace(distance, duration)
    distance = distance.to_f
    duration = duration.to_f

    speed = distance / (duration / 3600)
    pace = (duration / 60) / distance

    { speed: speed, pace: pace }
  end

  def self.parse(params)
    start_datetime = params[:date] + " " + params[:time]

    hour = params[:hour].to_i * 3600
    minute = params[:minute].to_i * 60
    second = params[:second].to_i
    duration = hour + minute + second

    distance = params[:distance].to_f

    avg_speed = distance / (duration / 3600.0)
    pace = ((duration / 60.0) / distance) * 60

    activity = {
      title: params[:title],
      user_id: params[:user_id],
      polyline: params[:polyline],
      big_image_url: params[:big_image_url],
      distance: params[:distance],
      elevation: params[:elevation],
      duration: duration,
      sport: params[:sport],
      start_datetime: start_datetime,
      avg_speed: avg_speed,
      pace: pace
    }

    Activity.new(activity)
  end
end
