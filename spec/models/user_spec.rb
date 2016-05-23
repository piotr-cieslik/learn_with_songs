require 'rails_helper'

RSpec.describe User, type: :model do
  before { @user = FactoryGirl.build(:user) }
  subject { @user }

  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }

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
end
