import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import commentReducer from "./manage/ManageReducer";

const store = createStore(
  commentReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
