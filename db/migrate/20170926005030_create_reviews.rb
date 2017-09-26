class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.string :author_name, null: false
      t.integer :place_id, null: false
      t.float :ratings, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, :place_id
  end
end
