import {all} from 'redux-saga/effects';
import newsListSaga from './newsListSaga';

function* rootSaga() {
  yield all([newsListSaga()]);
}

export default rootSaga;
