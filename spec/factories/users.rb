FactoryGirl.define do
  sequence(:email){ |n| "email#{n}@factory.com" }
  sequence(:auth_token){ |n| "token#{n}" }

  factory :user do
    email
    password "123456"
    password_confirmation "123456"
    auth_token
  end
end
