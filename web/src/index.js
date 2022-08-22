import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers";
import './index.css'
import { Provider } from "react-redux";

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
})

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById("root"));