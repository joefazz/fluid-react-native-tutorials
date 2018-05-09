import { StackNavigator } from "react-navigation";
import Items from "../containers/Items";
import Detail from "../containers/Detail";
export const RootNavigator = StackNavigator(
    { List: { screen: Items }, Detail: { screen: Detail } },
    {
        navigationOptions: {
            title: "Fluid Keep"
        }
    }
);
