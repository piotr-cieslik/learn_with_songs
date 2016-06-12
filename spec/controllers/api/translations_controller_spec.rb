require 'rails_helper'

describe Api::TranslationsController do
  before(:each) do
    set_request_accept_and_content_type_to_json()

    @user_1 = FactoryGirl.create(:user);
    @song_1 = FactoryGirl.create(:song, user: @user_1);
    @translation_1 = FactoryGirl.create(:translation, song: @song_1);

    @user_2 = FactoryGirl.create(:user);
    @song_2 = FactoryGirl.create(:song, user: @user_2);
    @translation_2 = FactoryGirl.create(:translation, song: @song_2);

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

    it "POST #create" do
      post(:create, { id: @translation_1.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "DELETE #destroy" do
      delete(:destroy, { id: @translation_1.id })
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "GET #index" do
    it "should return translations created by current user" do
      get(:index)

      response_data = get_response_data()
      expect(response_data.length).to eql(1)
      expect(response_data[0]["id"].to_i()).to eql(@translation_1.id)
      expect(response_data[0]["type"]).to eql('translations')
    end
  end

  describe "POST #create" do
    context "should create translation for current user if parameters are valid" do
      before(:each) do
        @translation = FactoryGirl.build(:translation, song: @song_1)
        json_data = ActiveModelSerializers::SerializableResource.new(@translation).as_json();
        post(:create, json_data)
      end

      it "return json representation of newly created object" do
        expect(get_response_attributes()["foreign-meaning"]).to eql(@translation.foreign_meaning)
        expect(get_response_attributes()["native-meaning"]).to eql(@translation.native_meaning)
      end

      it { expect(response).to have_http_status(:ok) }
    end

    context "should not create translation for current user if parameters are not valid" do
      before(:each) do
        @translation = FactoryGirl.build(:translation, song: @song_1)
        @translation.native_meaning = nil
        json_data = ActiveModelSerializers::SerializableResource.new(@translation).as_json();
        post(:create, json_data)
      end

      it "return errors" do
        expect(get_response_errors()).not_to be_nil
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end

    it "should not create translation when parameters are valid but song does not belong to user" do
      expect{
        translation = FactoryGirl.build(:translation, song: @song_2)
        json_data = ActiveModelSerializers::SerializableResource.new(translation).as_json();
        post(:create, json_data)
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

  describe "DELETE #destroy" do
    it "should delete translation, when translation belongs to user" do
      delete(:destroy, id: @translation_1.id)
      expect(response).to have_http_status(:no_content)
    end

    it "should not delete translation, when translation does not belong to user" do
      expect{ delete(:destroy, id: @translation_2.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

end
