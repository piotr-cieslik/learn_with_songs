class User < ActiveRecord::Base
  has_secure_password()

  validates(:email, presence: true, uniqueness: true)
  validates(:password, presence: true, if: :password_digest_changed?)
  validates(:password_confirmation, presence: true, if: :password_digest_changed?)
  validates(:auth_token, presence: true, uniqueness: true, if: :auth_token_changed?)

  has_many(:songs, dependent: :destroy)

  def generate_auth_token!
    self.auth_token = SecureRandom.uuid.gsub(/\-/,'')
  end
end
