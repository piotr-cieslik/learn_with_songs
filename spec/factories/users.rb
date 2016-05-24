FactoryGirl.define do
  factory :user do
    email "piotr.cieslik@outlook.com"
    password "123456"
    password_confirmation "123456"
    auth_token "abc123"
  end
end
