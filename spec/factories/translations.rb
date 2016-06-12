FactoryGirl.define do
  factory :translation do
    foreign_meaning "MyString"
    native_meaning "MyString"
    song_id 1
  end
end
