import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { CheckListItem } from "../components/CheckListItem";
import { FlatList, TextInput, RectButton } from "react-native-gesture-handler";
import { createItem } from "../redux/actions/todoActions";
import { TodoItem } from "../components/TodoItem";

export class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodoTitle: ""
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    {/* Accessing the state via props! */}
                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={this.props.items.todos}
                        renderItem={this.renderTodoItems}
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
    submitItem = () => {
        this.props.createItem(this.state.newTodoTitle);
        this.myTextInput.clear();
    };

    renderListFooter = () => (
        <TextInput
            ref={component => (this.myTextInput = component)}
            onChangeText={text => this.setState({ newTodoTitle: text })}
            onSubmitEditing={this.submitItem}
            placeholder={"New Checklist Item"}
            style={styles.input}
            value={this.state.newTodoTitle}
        />
    );

    renderTodoItems = ({ item }) => <TodoItem title={item.title} id={item.id} navigation={this.props.navigation} />;

    renderItemSeperator = () => <View style={{ minHeight: 10, minWidth: 500, backgroundColor: "white" }} />;
}

/**
 * Maybe a better name would be 'mapStoreToProps' however
 * this function is literally taking the state, and then the object
 * that you return is the mapping of it, which is returned through
 * as props via connect
 *
 * @param {State} state, state object passed by store (through connect)
 */
const mapStateToProps = state => ({
    items: state.items
});

/**
 * bindActions is the way that you can take redux actions and
 * map them to your props in a common sense way, in order to call
 * a 'bound' action simply call it as normal but make sure you use this.props
 * as that is the only way the component has reference to it.
 *
 * This function returns a mapped list of action dispatchers
 *
 * @param {function} dispatch, how to trigger redux actions
 */
const bindActions = dispatch => ({
    createItem: title => dispatch(createItem(title))
});

/**
 * The magic...
 *
 * You don't really have to understand how this works,
 * if you need to access the global state, you need this line.
 *
 * The first set of () defines your functions above that are passed data through from the store
 *
 * The second set of () is the way of 'connecting' the functions you defined above to the component
 */
export default connect(mapStateToProps, bindActions)(Items);

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
