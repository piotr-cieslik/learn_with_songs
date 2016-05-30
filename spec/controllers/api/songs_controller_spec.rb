require 'rails_helper'

describe Api::SongsController do
  before(:each) do
    @user_1 = FactoryGirl.create(:user);
    @song_1 = FactoryGirl.create(:song, user: @user_1);

    @user_2 = FactoryGirl.create(:user);
    @song_2 = FactoryGirl.create(:song, user: @user_2);

    request.headers['Authorization'] = @user_1.auth_token
  end

  describe "not authorized user should recived response with header :unauthorized when perform" do
    before(:each) do
      request.headers['Authorization'] = nil
    end

    it "GET #index" do
      get(:index, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "GET #show" do
      get(:show, { id: @song_1.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "POST #create" do
      get(:show, { id: @song_1.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "PATCH #update" do
      patch(:update, { id: @song_1.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end

    it "DELETE #destroy" do
      delete(:destroy, { id: @song_1.id }, format: :json)
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "GET #index" do
    it "should return songs created by current user" do
      get(:index, format: :json)

      server_response = get_json_response()
      expect(server_response.length).to eql(1)
      expect(server_response[0][:id]).to eql(@song_1.id)
    end
  end

  describe "GET #show" do
    it "should return songs when belongs to current user" do
      get(:show, id: @song_1.id, format: :json)
      expect(response).to have_http_status(:ok)
    end

    it "should raise ActiveRecord::RecordNotFound exception when song belongs to different user" do
      expect{ get(:show, id: @song_2.id, format: :json) }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

  describe "POST #create" do
    context "should create song for current user if parameters are valid" do
      before(:each) do
        @new_song_attributes = FactoryGirl.attributes_for(:song, user: @user_1)
        post(:create, { song: @new_song_attributes }, format: :json)
      end

      it "return json representation of newly created object" do
        server_response = get_json_response()

        expect(server_response[:author]).to eql(@new_song_attributes[:author])
        expect(server_response[:user_id]).to eql(@user_1.id)
      end

      it { expect(response).to have_http_status(:ok) }
    end

    context "should not create song for current user if parameters are not valid" do
      before(:each) do
        @new_song_attributes = FactoryGirl.attributes_for(:song, user: @user_1)
        @new_song_attributes[:author] = nil
        post(:create, { song: @new_song_attributes }, format: :json)
      end

      it "return error" do
        expect(get_json_response()).to have_key(:errors)
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "DELETE #destroy" do
    it "should delete song, when song belongs to user" do
      delete(:destroy, id: @song_1.id, format: :json)
      expect(response).to have_http_status(:no_content)
    end

    it "should not delete song, when song does not belong to user" do
      expect{ delete(:destroy, id: @song_2.id, format: :json) }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

end

def get_json_response
  JSON.parse(response.body, symbolize_names: true)
end
