import { generateRequestTypes, generateRequestActions } from 'actions/actions'

// ------------------------------------
// Constants
// ------------------------------------
export const DATA = {
  CREATE: generateRequestTypes('DATA_CREATE'),
  LIST: generateRequestTypes('DATA_LIST')
}

// ------------------------------------
// Actions
// ------------------------------------
export const actions = {
  create: generateRequestActions(DATA.CREATE),
  list: generateRequestActions(DATA.LIST)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DATA.LIST.SUCCESS]: (state, { payload: list, ...props }) =>
    Object.assign({}, state, { list, ...props }),
  [DATA.CREATE.SUCCESS]: (state, { payload, ...props }) =>
    Object.assign({}, state, { list: [...state.list, payload], ...props }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: []
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
