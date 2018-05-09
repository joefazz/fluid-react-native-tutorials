import { initialState } from "../InitialState";

export function items(state = initialState.items, action) {
    switch (action.type) {
        case "CREATE_ITEM":
            console.log(action);

            return Object.assign({}, state, {
                todos: state.todos.concat({ id: state.todos.length, title: action.payload.title, checkItems: [] })
            });

        case "CREATE_CHECK_ITEM":
            console.log(action);

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
