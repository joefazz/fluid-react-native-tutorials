import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export class CheckListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.checkItemContainer}>
                {/* How to create a touchable view, look at documentation to see all the various properties on it */}
                <TouchableHighlight
                    onPress={this.props.toggleCheck}
                    style={this.props.isChecked ? styles.checkedBox : styles.checkBox}
                >
                    <View />
                </TouchableHighlight>
                <Text style={styles.itemTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    checkItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },

    checkedBox: {
        height: 30,
        width: 30,
        borderRadius: 3,
        backgroundColor: "green"
    },

    checkBox: {
        height: 30,
        width: 30,
        borderRadius: 3,
        backgroundColor: "grey"
    },

    itemTitle: {
        fontSize: 18,
        marginLeft: 10
    }
});
