class SongSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :lyrics
end
