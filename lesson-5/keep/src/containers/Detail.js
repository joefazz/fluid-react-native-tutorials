import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { CheckListItem } from "../components/CheckListItem";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { createItem, createCheckItem, toggleCheck } from "../redux/actions/todoActions";

export class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    /**
     * Due to the way redux works, the global state is passed through
     * via props as well as any actions you may want to dispatch from inside
     * a component.
     *
     * This file is in the containers folder as it is a 'smart' component which
     * means it is connected to the store. It is good practice to try and conceptualise
     * redux in this way. Smart components will pass down the information from the state
     * to 'dumb' components so they may render them however they see fit.
     *
     * CheckListItem is a dumb component
     *
     * @param {*} props all passed props
     */
    constructor(props) {
        super(props);

        this.state = {
            newItem: ""
        };
    }

    render() {
        let todo = this.props.todos.filter(todo => todo.id === this.props.navigation.state.params.id);

        let checkItems = todo[0].checkItems;

        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    {/* Accessing the state via props! */}
                    <FlatList
                        data={checkItems}
                        renderItem={this.renderChecklistItem}
                        ItemSeparatorComponent={this.renderItemSeperator}
                        ListFooterComponent={this.renderListFooter}
                    />
                </View>
                <View style={styles.footerContainer} />
            </View>
        );
    }

    /**
     * Using the function passed down through props (via connect)
     * we can access the 'dispatch' method of redux in order to dispatch
     * the createItem function. Without dispatching the function it would just
     * be a no-op.
     */
    submitItem = () => this.props.createCheckItem(this.props.navigation.state.params.id, this.state.newItem);

    renderListFooter = () => (
        <TextInput
            onChangeText={text => this.setState({ newItem: text })}
            onSubmitEditing={this.submitItem}
            placeholder={"New Checklist Item"}
            style={styles.input}
            value={this.state.newItem}
        />
    );

    renderChecklistItem = ({ item }) => (
        <CheckListItem {...item} toggleCheck={() => this.props.toggleCheck(this.props.navigation.state.params.id, 0)} />
    );

    renderItemSeperator = () => <View style={{ minHeight: 10, minWidth: 500, backgroundColor: "white" }} />;
}

const mapStateToProps = state => ({
    todos: state.items.todos
});

const bindActions = dispatch => ({
    createCheckItem: (id, title) => dispatch(createCheckItem(id, title)),
    toggleCheck: (id, position) => dispatch(toggleCheck(id, position))
});

export default connect(mapStateToProps, bindActions)(Detail);

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
        flex: 18,
        paddingTop: 10
    },
    footerContainer: {
        flex: 1
    },
    input: {
        fontSize: 16,
        paddingTop: 10,
        paddingHorizontal: 10
    }
});
