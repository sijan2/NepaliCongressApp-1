import {
  RECEIVE_NEWS_LIST,
  REQUEST_NEWS_LIST,
  RECEIVE_NEWS_LIST_SUCCESS,
  ERROR_NEWS_LIST,
  SET_NEWS_LIST_PAGE_NO,
  SET_NEWS_LIST_PAGE_SIZE,
} from '@redux/types/newsListTypes';
export const requestNewsList = () => ({
  type: REQUEST_NEWS_LIST,
});
export const receiveNewsList = (payload: any) => ({
  type: RECEIVE_NEWS_LIST,
  payload,
});
export const receiveNewsListSuccess = (payload: any) => ({
  type: RECEIVE_NEWS_LIST_SUCCESS,
  payload,
});
export const errorNewsList = (payload: any) => ({
  type: ERROR_NEWS_LIST,
  payload,
});
export const setNewsListPageNo = (payload: any) => ({
  type: SET_NEWS_LIST_PAGE_NO,
  payload,
});
export const setNewsListPageSize = (payload: any) => ({
  type: SET_NEWS_LIST_PAGE_SIZE,
  payload,
});
