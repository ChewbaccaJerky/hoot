@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.author do
      json.id       review.author_id
      json.username review.author_username
    end
    json.place_id          review.place_id
    json.ratings           review.ratings
    json.body              review.body
  end
end
