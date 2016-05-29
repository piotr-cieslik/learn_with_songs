require 'rails_helper'

describe Api::UsersController do
  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it "returns the data when user_id match to the logged user id" do
      request.headers['Authorization'] = @user.auth_token
      get(:show, id: @user.id, format: :json)

      json_response = get_json_response()
      expect(json_response[:email]).to eql @user.email
      expect(response).to have_http_status(:ok)
    end

    it "returns the unauthorized when user is not logged in" do
      get(:show, id: @user.id, format: :json)

      expect(response).to have_http_status(:unauthorized)
    end

    it "returns the unauthorized when user_id does not match to the logged user id" do
      second_user = FactoryGirl.create(:user, { email: "another@email.com", auth_token: "other_auth_token" });
      request.headers['Authorization'] = @user.auth_token
      get(:show, id: second_user.id, format: :json)

      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      delete(:destroy, { id: @user.id }, format: :json)
    end

    it { expect(response).to have_http_status(:no_content) }
  end

  describe "PUT/PATCH #update" do
    context "when parameters are valid" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        @new_email = "update@outlook.com"
        patch(:update, { id: @user.id, user: { email: @new_email } }, format: :json)
      end

      it "render the json representation for the updated user" do
        json_response = get_json_response()
        expect(json_response[:email]).to eql @new_email
      end

      it{ expect(response).to have_http_status(:ok) }
    end

    context "when parameters are not valid" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        patch(:update, { id: @user.id, user: { email: "" } }, format: :json)
      end

      it "renders the json errors on why the user could not be updated" do
        expect(get_json_response()).to have_key(:errors)
      end

      it{ expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "POST #create" do
    context "when parameters are valid" do
      before(:each) do
        @user_attributes = FactoryGirl.attributes_for(:user)
        post(:create, { user: @user_attributes }, format: :json)
      end

      it "renders the json representation for the user record just created" do
        expect(get_json_response()[:email]).to eql @user_attributes[:email]
      end

      it { expect(response).to have_http_status(:created) }
    end

    context "when parameters are not valid" do
      before(:each) do
        @user_attributes = FactoryGirl.attributes_for(:user)
        @user_attributes[:email] = nil
        post(:create, { user: @user_attributes }, format: :json)
      end

      it "renders the json errors on why the user could not be created" do
        expect(get_json_response()).to have_key(:errors)
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end
end

def get_json_response
  JSON.parse(response.body, symbolize_names: true)
end
