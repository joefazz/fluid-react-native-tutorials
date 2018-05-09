/**
 * The State we want our application to start with
 * this is where we can define the general shape of
 * our state along with default values
 */
export const initialState = {
    items: {
        todos: [{ id: 0, title: "", checkItems: [{ title: "", isChecked: false }] }]
    }
};
