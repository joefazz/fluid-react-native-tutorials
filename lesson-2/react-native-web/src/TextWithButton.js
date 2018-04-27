import React from "react";
import { View, Text, Button } from "react-native";

export default class TextWithButton extends React.Component {
    render() {
        return (
            <View style={{ maxWidth: 400, alignSelf: "center" }}>
                <Text>{this.props.value}</Text>
                <Button title={this.props.buttonTitle} onPress={this.props.onButtonPress} />
            </View>
        );
    }
}
