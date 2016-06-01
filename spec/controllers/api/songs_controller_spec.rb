require 'rails_helper'

describe Api::SongsController do
  before(:each) do
    set_request_accept_and_content_type_to_json()

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
      get(:index)
      expect(response).to have_http_status(:unauthorized)
    end

    it "GET #show" do
      get(:show, { id: @song_1.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "POST #create" do
      get(:show, { id: @song_1.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "PATCH #update" do
      patch(:update, { id: @song_1.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "DELETE #destroy" do
      delete(:destroy, { id: @song_1.id })
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "GET #index" do
    it "should return songs created by current user" do
      get(:index)

      response_data = get_response_data()
      expect(response_data.length).to eql(1)
      expect(response_data[0]["id"].to_i()).to eql(@song_1.id)
    end
  end

  describe "GET #show" do
    it "should return songs when belongs to current user" do
      get(:show, id: @song_1.id)
      expect(response).to have_http_status(:ok)
    end

    it "should raise ActiveRecord::RecordNotFound exception when song belongs to different user" do
      expect{ get(:show, id: @song_2.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

  describe "POST #create" do
    context "should create song for current user if parameters are valid" do
      before(:each) do
        @song = FactoryGirl.build(:song, user: @user_1)
        song_serializable_resource = ActiveModelSerializers::SerializableResource.new(@song)
        song_as_json = song_serializable_resource.as_json();
        post(:create, song_as_json)
      end

      it "return json representation of newly created object" do
        expect(get_response_attributes()["author"]).to eql(@song.author)
      end

      it { expect(response).to have_http_status(:ok) }
    end

    context "should not create song for current user if parameters are not valid" do
      before(:each) do
        @song = FactoryGirl.build(:song, user: @user_1)
        @song.author = nil
        song_as_json = ActiveModelSerializers::SerializableResource.new(@song).as_json()

        post(:create, song_as_json)
      end

      it "return errors" do
        expect(get_response_errors()).not_to be_nil
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "PATCH #update" do
    before(:each) do
      @new_author = "different author"
    end

    context "should update song when parameters are valid and song belongs to user" do
      before(:each) do
        @song_1.author = @new_author
        json_data = ActiveModelSerializers::SerializableResource.new(@song_1).as_json()
        patch(:update, { id: @song_1.id, data: json_data[:data] } )
      end

      it "return json representation of updated object" do
        expect(get_response_attributes()["author"]).to eql(@new_author)
      end

      it{ expect(response).to have_http_status(:ok) }
    end

    it "should not update song when parameters are valid but song does not belong to user" do
      expect{
        @song_2.author = @new_author
        json_data = ActiveModelSerializers::SerializableResource.new(@song_2).as_json()
        patch(:update,  { id: @song_2.id, data: json_data[:data] } )
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end

    it "should not update song when parameters are not valid and song does not belong to user" do
      expect{
        @song_2.author = nil
        json_data = ActiveModelSerializers::SerializableResource.new(@song_2).as_json()
        patch(:update,  { id: @song_2.id, data: json_data[:data] } )
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end

    context "should not update song when parameters are not valid and song belongs to user" do
      before(:each) do
        @song_1.author = nil
        json_data = ActiveModelSerializers::SerializableResource.new(@song_1).as_json()
        patch(:update,  { id: @song_1.id, data: json_data[:data] } )
      end

      it "return errors" do
        expect(get_response_errors()).not_to be_nil
      end

      it{ expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "DELETE #destroy" do
    it "should delete song, when song belongs to user" do
      delete(:destroy, id: @song_1.id)
      expect(response).to have_http_status(:no_content)
    end

    it "should not delete song, when song does not belong to user" do
      expect{ delete(:destroy, id: @song_2.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

end
