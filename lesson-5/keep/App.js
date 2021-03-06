import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Items from "./src/containers/Items";
import { RootNavigator } from "./src/navigators/Root";

export default class App extends React.Component {
    /**
     * Wrapping Provider component from Redux
     * Allows access through to the global state (store)
     * via the connect()() component
     */
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}
