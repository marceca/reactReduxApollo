const fetch = require('node-fetch');

function Waspql(store, type, API, userQuery, userVariables) {
  if(userVariables) {
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: userQuery,
      variables: userVariables,
    }),
  })
    .then(result => result.json())
    .then((result) => store.dispatch(type(result)))
} else {
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: userQuery
    }),
  })
    .then(result => result.json())
    .then((result) => store.dispatch(type(result)))
  }
}

export default Waspql;