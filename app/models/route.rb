# == Schema Information
#
# Table name: routes
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  description   :text
#  author_id     :integer          not null
#  polyline      :text             not null
#  image_url     :text             not null
#  distance      :float            not null
#  elevation     :float            not null
#  duration      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  sport         :string
#  big_image_url :text
#

class Route < ApplicationRecord
  validates :title,
            :author_id,
            :polyline,
            :image_url,
            :distance,
            :elevation,
            :duration,
            :sport, presence: true

  belongs_to :author,
             class_name: :User,
             foreign_key: :author_id
end
