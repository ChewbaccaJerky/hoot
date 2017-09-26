

export const fetchBusinesses = () => (
  $.ajax({
    method: "GET",
    url: "api/businesses",
  })
);

export const fetchBusiness = (placeId) => (
  $.ajax({
    method: "GET",
    url: "api/businesses/" + placeId
  })
);
