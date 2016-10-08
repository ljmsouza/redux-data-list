const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const generateRequestTypes = action => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${action}_${type}`
    return acc
  }, {})
}

export const generateRequestActions = actionType => ({
  request: (payload = {}) =>
    action(actionType.REQUEST, {payload, fetching: true}),
  success: (payload, response) =>
    action(actionType.SUCCESS, {payload, response, fetching: false}),
  failure: (payload, response) =>
    action(actionType.SUCCESS, {error, response, fetching: false})
})

export const action = (type, payload = {}) => ({ type, ...payload })
