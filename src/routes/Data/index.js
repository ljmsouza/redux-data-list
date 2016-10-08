import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'data',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Data = require('./containers/DataContainer').default
      const reducer = require('./modules/Data').default
      const actions = require('./modules/Data').actions

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'Data', reducer })

      /* Component willmount */
      store.dispatch(actions.list.request())

      /*  Return getComponent   */
      cb(null, Data)

    /* Webpack named bundle   */
    }, 'Data')
  }
})
