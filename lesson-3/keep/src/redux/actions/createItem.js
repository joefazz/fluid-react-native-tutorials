/**
 * Just a simple function that returns a very
 * basic redux action
 *
 * @param {string} title
 */
export function createItem(title = "New item") {
    return {
        type: "CREATE_ITEM",
        payload: title
    };
}
