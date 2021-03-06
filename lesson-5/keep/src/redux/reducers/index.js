import { combineReducers } from "redux";
import { items } from "./itemsReducer";
/**
 * Combine reducers using redux function,
 * accepts all reducers as an object, the keys
 * MUST directly correspond with a property in your state
 */
const reducers = combineReducers({
    /**
     * You may have never seen this syntax but this is
     * short hand for writing { items: items }
     */
    items
});

export default reducers;
