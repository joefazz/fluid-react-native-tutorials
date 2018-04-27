import React from "react";
import { View, StyleSheet } from "react-native";

import TextWithButton from "./TextWithButton";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <View style={styles.app}>
                <TextWithButton
                    value={"This is our counter: " + this.state.count}
                    buttonTitle={"Increase Counter"}
                    onButtonPress={() => this.increaseCount()}
                />
            </View>
        );
    }

    increaseCount() {
        console.log("Whats going on");
        this.setState({ count: this.state.count + 1 });
    }
}

// ----------------------------- //

const styles = StyleSheet.create({
    app: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    }
});
