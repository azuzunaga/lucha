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
            :polyline,
            :big_image_url,
            :distance,
            :elevation,
            :duration,
            :sport,
            :start_datetime, presence: true

  belongs_to :user
end
