import { initialState } from "../InitialState";

/**
 * This items function is a reducer,
 * a reducer is a big switch case check against many different situations
 * where you want to modify the state. If you want to modify the items state then
 * you must do it inside the items reducer.
 *
 * Reducers must return a new object representing the state however you must never modify
 * the state directly i.e by doing state.item = 4;
 *
 * @param {*} state
 * @param {*} action
 */
export function items(state = initialState.items, action) {
    switch (action.type) {
        // Adds a new todo item to the state access the current state to get the length
        // and the payload of the action to get the information from the component
        case "CREATE_ITEM":
            return Object.assign({}, state, {
                todos: state.todos.concat({ id: state.todos.length, title: action.payload.title, checkItems: [] })
            });

        // Adds a checklist item within a todo, we do this by mapping through the existing state.
        // As a map returns a new object we can directly do it and assign it to the todos object in state
        case "CREATE_CHECK_ITEM":
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.checkItems.push({ key: String(Math.random() * 10), title: action.payload.title, isChecked: false });

                        return todo;
                    } else {
                        return todo;
                    }
                })
            });

        // Searches for the correct checklist item within the correct todo so we can toggle the isChecked status
        case "TOGGLE_CHECK":
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.checkItems[action.payload.position].isChecked = !todo.checkItems[action.payload.position].isChecked;

                        return todo;
                    } else {
                        return todo;
                    }
                })
            });
        default:
            return state;
    }
}
