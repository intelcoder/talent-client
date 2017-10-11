import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:9966'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
  

      return Object.assign({},camelizedJson)
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}