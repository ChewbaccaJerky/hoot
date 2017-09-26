@reviews.each do |review|
  review.set! review.id do
    json.author do
      json.author_id       review.author_id
      json.author_username review.author_username
    end

    json.place_id          review.place_id
    json.ratings           review.ratings
    json.body              review.body
  end
end
