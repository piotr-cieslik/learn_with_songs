require 'rails_helper'

describe Song do
  before(:each) { @song = FactoryGirl.build(:song) }
  subject { @song }

  it { should respond_to(:author) }
  it { should respond_to(:title) }
  it { should respond_to(:lyrics) }
  it { should respond_to(:user_id) }

  describe "should not be valid when" do
    it "author is not present" do
      @song.author = nil
      should_not be_valid
    end

    it "title is not present" do
      @song.title = nil
      should_not be_valid
    end

    it "lyrics is not present" do
      @song.lyrics = nil
      should_not be_valid
    end

    it "user_id is not present" do
      @song.user_id = nil
      should_not be_valid
    end
  end

  it { should be_valid }
end
