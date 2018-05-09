/**
 * Just a simple function that returns a very
 * basic redux action
 *
 * @param {string} title
 */
export function createItem(title = "New item") {
    return {
        type: "CREATE_ITEM",
        payload: { title }
    };
}

export function createCheckItem(id, title = "New Check item") {
    return {
        type: "CREATE_CHECK_ITEM",
        payload: { id, title }
    };
}

export function toggleCheck(id, position) {
    return {
        type: "TOGGLE_CHECK",
        payload: { id, position }
    };
}
