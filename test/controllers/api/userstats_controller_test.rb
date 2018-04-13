require 'test_helper'

class Api::UserstatsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_userstats_index_url
    assert_response :success
  end

end
