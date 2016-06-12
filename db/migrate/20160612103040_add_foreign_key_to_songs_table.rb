class AddForeignKeyToSongsTable < ActiveRecord::Migration
  def change
    add_foreign_key :songs, :users
  end
end
