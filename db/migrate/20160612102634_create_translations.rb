class CreateTranslations < ActiveRecord::Migration
  def change
    create_table :translations do |t|
      t.string :foreign_meaning
      t.string :native_meaning
      t.integer :song_id

      t.timestamps null: false
    end
    add_index :translations, :song_id
  end
end
