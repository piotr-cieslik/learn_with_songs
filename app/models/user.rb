class User < ActiveRecord::Base
  has_secure_password()
  validates(:email, presence: true)
  validates(:password, presence: true, if: :password_digest_changed?)
  validates(:password_confirmation, presence: true, if: :password_digest_changed?)
end
