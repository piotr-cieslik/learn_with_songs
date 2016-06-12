class TranslationSerializer < ActiveModel::Serializer
  attributes :id, :foreign_meaning, :native_meaning, :song_id
end
