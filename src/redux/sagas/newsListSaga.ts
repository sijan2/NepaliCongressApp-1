import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_NEWS_LIST,
  RECEIVE_NEWS_LIST_SUCCESS,
  ERROR_NEWS_LIST,
} from '@redux/types/newsListTypes';
import {GET} from '../../services/newsData';

const fetchNewsList = async () => {
  const response = await GET('api/news/all-news/1/10');
  return response.data.data;
};

function* workNewsFetch(): any {
  try {
    const response = yield call(fetchNewsList);
    yield put({type: RECEIVE_NEWS_LIST_SUCCESS, payload: response});
    console.log('RESPONSE => ', response);
  } catch (error) {
    yield put({type: ERROR_NEWS_LIST, payload: error});
    console.log('FETCH NEWS LIST ERROR => ', error);
  }
}

function* newsListSaga(): any {
  yield takeEvery(REQUEST_NEWS_LIST, workNewsFetch);
}

export default newsListSaga;
