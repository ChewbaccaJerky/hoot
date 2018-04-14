class AddBioAndProfileImageToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :bio, :text, null: true
    add_column :users, :profile_image, :string, null: true
  end
end
