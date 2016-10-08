import { takeEvery } from 'redux-saga'
import { actions, DATA } from 'routes/Data/modules/Data'
import { call, put, fork } from 'redux-saga/effects'
import { api, endpoints } from 'services/api'

function* newData(action) {
   try {
    const data = yield call(api.post, endpoints.data(), {
      body: action.payload
    })
    yield put(actions.create.success(data.body, data))
   } catch (e) {
      yield put(actions.create.failure(e, data))
   }
}

function* listData(action) {
  try {
    const dataList = yield call(api.get, endpoints.data())
    yield put(actions.list.success(dataList.body, dataList))
  } catch (e) {
    // yield put(actions.list.failure(e, dataList))
  }
}

function* watchNewDataRequest(action) {
  yield takeEvery(DATA.CREATE.REQUEST, newData)
}

function* watchListDataRequest(action) {
  yield takeEvery(DATA.LIST.REQUEST, listData)
}

export default function* dataRoot() {
  yield [
    fork(watchNewDataRequest),
    fork(watchListDataRequest)
  ]
}
