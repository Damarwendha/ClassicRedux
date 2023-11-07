import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./features/users/userSlice";

const rootReducer = combineReducers({
  user: userReducer
  // ...slice reducer lain
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
