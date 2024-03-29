import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
//import thunk from "redux-thunk";
import { dogsReducer } from "./reducers/dogs.js";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware()
);

const store = createStore(dogsReducer, composedEnhancers);

export default store;
