require 'rails_helper'

describe User do
  before(:each) { @user = FactoryGirl.build(:user) }
  subject { @user }

  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should respond_to(:auth_token) }

  it { should be_valid }

  describe "when email is not present" do
    before { @user.email = nil }
    it { should_not be_valid }
  end

  describe "when password is not present" do
    before { @user.password = nil }
    it { should_not be_valid }
  end

  describe "when password_confirmation is not present" do
    before { @user.password_confirmation = nil }
    it { should_not be_valid }
  end

  describe "when auth_token is not present" do
    before { @user.auth_token = nil }
    it { should_not be_valid }
  end

  describe "auth_token generation" do
    it "should generate diferent tokens for different users" do
      @user.generate_auth_token!()
      @user.save!()

      second_user = FactoryGirl.build(:user, email: "aaa@outlook.com")
      second_user.generate_auth_token!()
      second_user.save!()

      expect(@user.auth_token).not_to eql(second_user.auth_token)
    end
  end

  describe "assosiations" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      3.times(){ FactoryGirl.create(:song, user: @user) }
    end

    it "destroys the associated song on destroy" do
      songs = @user.songs
      @user.destroy
      songs.each do |song|
        expect(Song.exist?(product.id)).to eql(false)
      end
    end
  end
end
