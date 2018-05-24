
export const postUser = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  })
);

export const postSession = (user) => (
  $.ajax({
    method:'POST',
    url: 'api/session',
    data: user
  })
);

export const destroySession = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
