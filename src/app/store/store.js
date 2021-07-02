import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer, // mounted under "form"
});
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
  reducer
);

export default store;
