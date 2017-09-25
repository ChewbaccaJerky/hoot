
export const searchBusinesses = (searchParams) => (
  $.ajax({
    url: 'api/search/' + searchParams,
    method: 'GET'
  })
);
