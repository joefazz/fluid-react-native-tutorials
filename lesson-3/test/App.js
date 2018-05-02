import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { CheckListItem } from "./CheckListItem";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // Static array of checklist items
        // Key is a React rendering thing,
        // making non unique keys leads to bad behaviour
        this.checklistItemsArray = [
            {
                key: 1237,
                title: "Buy milk",
                isChecked: true
            },
            {
                key: 1236,
                title: "Pick up laundry",
                isChecked: false
            },
            {
                key: 1235,
                title: "Learn to code",
                isChecked: true
            },
            {
                key: 1234,
                title: "Attend Scrum",
                isChecked: false
            }
        ];
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Safe Area View makes it iPhoneX friendly (how to make martine happy) */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Checklist</Text>
                </View>
                {/* Map through checklistItemsArray and render a ChecklistItem for each element, pass all properties of objects as props for component */}
                <View style={styles.listContainer}>{this.checklistItemsArray.map(item => <CheckListItem {...item} />)}</View>
                <View style={styles.footerContainer}>
                    <Text>Footer</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "flex-start"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "flex-end"
    },
    listContainer: {
        flex: 4
    },
    footerContainer: {
        flex: 1
    }
});
