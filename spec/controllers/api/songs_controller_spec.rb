require 'rails_helper'

describe Api::SongsController do
  describe "not authorized user should recived response with header :unauthorized when perform" do
    before(:each) do
      @user = FactoryGirl.create(:user);
      @song = FactoryGirl.create(:song, user: @user);
    end

    it "GET #index" do
      get(:index, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "GET #show" do
      get(:show, { id: @song.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "POST #create" do
      get(:show, { id: @song.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "PATCH #update" do
      patch(:update, { id: @song.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "DELETE #destroy" do
      delete(:destroy, { id: @song.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end
  end
end
