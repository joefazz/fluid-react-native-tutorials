import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { initialState } from "./InitialState";
import logger from "redux-logger";

/**
 * createStore() function from redux takes in all
 * reducers as first param, initialState as second,
 * and any middleware you want to inject between all redux calls
 * third, here we use logging middleware but this is also where
 * middleware would go if we want to remember the global state
 * when the user force closes the application
 */
export const store = createStore(reducers, initialState, applyMiddleware(logger));
