import {
  RECEIVE_NEWS_LIST,
  REQUEST_NEWS_LIST,
  RECEIVE_NEWS_LIST_SUCCESS,
  ERROR_NEWS_LIST,
  SET_NEWS_LIST_PAGE_NO,
  SET_NEWS_LIST_PAGE_SIZE,
} from '@redux/types/newsListTypes';

export const initialState = {
  isLoading: false,
  newsList: [],
};

const newsListReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_NEWS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_NEWS_LIST:
      return {
        ...state,
        isLoading: false,
        newsList: action.payload,
      };
    case RECEIVE_NEWS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: action.payload,
      };
    case ERROR_NEWS_LIST:
      return {
        ...state,
        isLoading: false,
      };
    case SET_NEWS_LIST_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload,
      };
    case SET_NEWS_LIST_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    default:
      return state;
  }
};

export default newsListReducer;
