require "test_helper"

class StaticPageControllerTest < ActionDispatch::IntegrationTest
  test "should get landing" do
    get static_page_landing_url
    assert_response :success
  end

  test "should get home" do
    get static_page_home_url
    assert_response :success
  end

  test "should get writing" do
    get static_page_writing_url
    assert_response :success
  end

  test "should get profile" do
    get static_page_profile_url
    assert_response :success
  end
end
