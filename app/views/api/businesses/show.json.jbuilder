json.set! @business["place_id"] do
  json.place_id @business["place_id"]
  json.name @business["name"]
  json.address  @business["formatted_address"]
  json.phone    @business["international_phone_number"]
  json.location @business["geometry"]["location"]
  json.types    @business["types"]
  json.price_level @business["price_level"]
  json.hours @business["opening_hours"]["weekday_text"]
  json.photos @business["photos"]
end
