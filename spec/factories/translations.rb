FactoryGirl.define do
  factory :translation do
    foreign_meaning "foreign"
    native_meaning "native"
    song_id 1
  end
end
