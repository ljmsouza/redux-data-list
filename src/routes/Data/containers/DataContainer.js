import { connect } from 'react-redux'
import { actions } from '../modules/Data'
import { reduxForm } from 'redux-form'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Data from '../components/Data'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  newData: actions.create.request
}

const mapStateToProps = (state) => console.log('aaaaa', state) || ({
  dataList: state.Data.list
})

const formData = reduxForm({
  form: 'data'
})(Data)

export default connect(mapStateToProps, mapActionCreators)(formData)
