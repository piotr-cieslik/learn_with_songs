require 'rails_helper'

describe Api::SessionsController do
  before(:each) do
    set_request_accept_and_content_type_to_json()
  end

  describe "POST #create" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @json_data = {
        :data => {
          :type => "session",
          :attributes => {
            email: @user.email,
            password: "123456" } } }
    end

    context "when the credentials are correct" do
      before(:each) do
        post(:create, @json_data)
      end

      it "returns the user record corresponding to the given credentials" do
        @user.reload
        expect(get_response_attributes()["auth-token"]).to eql @user.auth_token
      end

      it { expect(response).to have_http_status(:ok) }
    end

    context "when the credentials are incorrect" do
      before(:each) do
        @json_data[:data][:attributes][:password] = "invalidpassword"
        post(:create, @json_data)
      end

      it "returns a json with an error" do
        expect(get_response_body_as_json()).to have_key(:errors)
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      delete(:destroy, id: @user.auth_token)
    end

    it "generate new auth_token" do
      old_auth_token = @user.auth_token
      @user.reload()
      expect(old_auth_token).not_to eql(@user.auth_token)
    end

    it { expect(response).to have_http_status(:no_content) }
  end
end
