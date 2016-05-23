require 'rails_helper'

describe Api::UsersController, type: :controller do
  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      get(:show, id: @user.id, format: :json)
    end

    it "returns the information about a user" do
      result = JSON.parse(response.body, symbolize_names: true)
      expect(result[:email]).to eql(@user.email)
    end

    it "should response with 200 code" do
      expect(response).to have_http_status(:ok)
    end
  end
end
