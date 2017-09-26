class Review < ApplicationRecord
  validates :author_id, :author_username, :place_id, :ratings, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
