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

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
