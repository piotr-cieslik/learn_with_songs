class Translation < ActiveRecord::Base
  validates(:foreign_meaning, presence: true)
  validates(:native_meaning, presence: true)
  validates(:song_id, presence: true)

  belongs_to(:song)
end
