import { call, put, fork } from 'redux-saga/effects'
import dataRoot from './data'

export default function* root() {
  yield [
    fork(dataRoot)
  ]
}
