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

/**
 * Creates the checklist item within todos,
 * we have to pass the id so we know which todo the
 * checklist item should go into.
 *
 * @param {number} id
 * @param {string} title
 */
export function createCheckItem(id, title = "New Check item") {
    return {
        type: "CREATE_CHECK_ITEM",
        payload: { id, title }
    };
}

/**
 * Also has to pass the id of the todo but also the position that the checklist item
 * is in that we want to modify
 *
 * @param {number} id
 * @param {string} position
 */
export function toggleCheck(id, position) {
    return {
        type: "TOGGLE_CHECK",
        payload: { id, position }
    };
}
