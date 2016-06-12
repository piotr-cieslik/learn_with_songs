class SongSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :lyrics
  has_many :translations
end
