import { createStackNavigator } from "react-navigation";
import Items from "../containers/Items";
import Detail from "../containers/Detail";

/**
 * createStackNavigator() is a function exposed by react navigation that
 * lets us pass a route configuration object as the first paramater
 * and a navigator configuration object as the second
 */
export const RootNavigator = createStackNavigator(
    { List: { screen: Items }, Detail: { screen: Detail } },
    {
        navigationOptions: {
            title: "Fluid Keep"
        }
    }
);
