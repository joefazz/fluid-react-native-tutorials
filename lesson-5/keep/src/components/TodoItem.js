import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export class TodoItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.checkItemContainer}
                onPress={() => this.props.navigation.push("Detail", { title: this.props.title, id: this.props.id })}
            >
                {/* How to create a touchable view, look at documentation to see all the various properties on it */}
                <Text style={styles.itemTitle}>{this.props.title}</Text>
            </TouchableOpacity>
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
