class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :songs, :user_id
  end
end
