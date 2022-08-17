import {combineReducers} from 'redux';
import newsListReducer from './newsListReducer';

export default combineReducers({
  newsListReducer: newsListReducer,
});
