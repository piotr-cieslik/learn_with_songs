class Song < ActiveRecord::Base
  validates(:author, presence: true)
  validates(:title, presence: true)
  validates(:lyrics, presence: true)
  validates(:user_id, presence: true)

  belongs_to(:user)
end
