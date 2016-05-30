require 'rails_helper'

describe Api::SessionsController do
  describe "POST #create" do
    before(:each) { @user = FactoryGirl.create(:user) }

    context "when the credentials are correct" do
      before(:each) do
        credentials = { email: @user.email, password: "123456" }
        post(:create, { session: credentials }, format: :json)
      end

      it "returns the user record corresponding to the given credentials" do
        @user.reload
        expect(get_response_body_as_json()[:auth_token]).to eql @user.auth_token
      end

      it { expect(response).to have_http_status(:ok) }
    end

    context "when the credentials are incorrect" do
      before(:each) do
        credentials = { email: @user.email, password: "invalidpassword" }
        post(:create, { session: credentials }, format: :json)
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
      delete(:destroy, id: @user.auth_token, format: :json)
    end

    it "generate new auth_token" do
      old_auth_token = @user.auth_token
      @user.reload()
      expect(old_auth_token).not_to eql(@user.auth_token)
    end

    it { expect(response).to have_http_status(:no_content) }
  end
end
