class Route < ApplicationRecord
  validates :title,
            :author_id,
            :polyline,
            :image_url,
            :distance,
            :elevation,
            :duration, presence: true

  belongs_to :author,
             class_name: :User,
             foreign_key: :author_id
end
