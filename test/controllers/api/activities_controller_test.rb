require 'test_helper'

class Api::ActivitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_activities_index_url
    assert_response :success
  end

  test "should get create" do
    get api_activities_create_url
    assert_response :success
  end

end
