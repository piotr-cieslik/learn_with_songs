require 'rails_helper'

describe Translation do
  before(:each) { @translation = FactoryGirl.build(:translation) }
  subject { @translation }

  it { should respond_to(:foreign_meaning) }
  it { should respond_to(:native_meaning) }
  it { should respond_to(:song_id) }

  it { should be_valid }

  describe "should not be valid when" do
    it "foreign_meaning is not present" do
      @translation.foreign_meaning = nil
      should_not be_valid
    end

    it "native_meaning is not present" do
      @translation.native_meaning = nil
      should_not be_valid
    end

    it "song_id is not present" do
      @translation.song_id = nil
      should_not be_valid
    end
  end

  describe "assosiations" do
    before(:each) do
      @song = FactoryGirl.create(:song)
      3.times(){ FactoryGirl.create(:translation, song: @song) }
    end

    it "destroys the associated song on destroy" do
      translations = @song.translations
      @song.destroy
      translations.each do |t|
        expect(Translations.exist?(t.id)).to eql(false)
      end
    end
  end
end
