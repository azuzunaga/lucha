require 'test_helper'

class Api::RoutesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_routes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_routes_show_url
    assert_response :success
  end

  test "should get create" do
    get api_routes_create_url
    assert_response :success
  end

end
