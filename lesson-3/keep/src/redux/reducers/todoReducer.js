import { initialState } from "../InitialState";

/**
 * Simple reducer definition, reducers are just functions which
 * check the type of actions, if there is a matching type with something in the reducer
 * than the relevant code is executed. Actions are actually dispatched through ALL reducers
 * in the application which is why the switch - case has to exist.
 *
 * The new state object must be returned inside each case check, it must be a new object and you
 * must not mutate the state (you can't do this by accident anyway it will throw an error)
 *
 * State MUST be returned through every branch of the switch, returning null will cause an error
 *
 * I used a string check here but in real code it would be a const as these reducer names can easily change
 *
 * @param {State} state, the global state is passed here by default but if there is nothing passed, accepts the initialState
 * @param {type: String, payload: *} action, what is returned from actions
 */
export function todos(state = initialState.todos, action) {
    switch (action.type) {
        case "CREATE_ITEM":
            console.log(action);

            return Object.assign({}, state, {
                items: state.items.concat([{ key: Math.random() * 10, title: action.payload, isChecked: false }])
            });
        default:
            return state;
    }
}
