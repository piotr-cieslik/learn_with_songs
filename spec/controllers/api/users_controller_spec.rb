require 'rails_helper'

describe Api::UsersController do
  before(:each) do
    set_request_accept_and_content_type_to_json()
  end

  describe "When try to modify data belongs to other user" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @second_user = FactoryGirl.create(:user)
      request.headers['Authorization'] = @user.auth_token
    end

    it "GET #show should return unauthorized" do
      get(:show, { id: @second_user.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "PUT/PATCH #update should return unauthorized" do
      patch(:update, { id: @second_user.id })
      expect(response).to have_http_status(:unauthorized)
    end

    it "DELETE #destroy should return unauthorized" do
      delete(:destroy, { id: @second_user.id })
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it "returns the data when user_id match to the logged user id" do
      request.headers['Authorization'] = @user.auth_token
      get(:show, id: @user.id)

      expect(get_response_attributes()["email"]).to eql @user.email
      expect(response).to have_http_status(:ok)
    end

    it "returns the unauthorized when user is not logged in" do
      get(:show, id: @user.id)

      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      request.headers['Authorization'] = @user.auth_token

      delete(:destroy, { id: @user.id })
    end

    it { expect(response).to have_http_status(:no_content) }
  end

  describe "PUT/PATCH #update" do
    context "when parameters are valid" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        @new_email = "update@outlook.com"

        request.headers['Authorization'] = @user.auth_token
        patch(:update, { id: @user.id, user: { email: @new_email } })
      end

      it "render the json representation for the updated user" do
        expect(get_response_attributes()["email"]).to eql @new_email
      end

      it{ expect(response).to have_http_status(:ok) }
    end

    context "when parameters are not valid" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        request.headers['Authorization'] = @user.auth_token

        patch(:update, { id: @user.id, user: { email: "" } })
      end

      it "renders the json errors on why the user could not be updated" do
        expect(get_response_errors()).not_to be_nil
      end

      it{ expect(response).to have_http_status(:unprocessable_entity) }
    end
  end
end
