class AddForeignKeyToTranslationsColumn < ActiveRecord::Migration
  def change
    add_foreign_key :translations, :songs
  end
end
