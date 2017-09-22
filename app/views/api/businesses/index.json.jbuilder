@businesses.each do |business|
  json.set! business["place_id"] do
    json.name     business["name"]
    json.address  business["formatted_address"]
    json.location business["geometry"]["location"]
    json.place_id business["place_id"]
    json.types    business["types"]
    json.photo_reference business["photos"][0]["photo_reference"]
  end
end
