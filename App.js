import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import OtherColorScreen from "./src/screens/OtherColorScreen";
import NameScreen from "./src/screens/NameScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    OtherColor: OtherColorScreen,
    Name: NameScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Galo",
    },
  }
);

export default createAppContainer(navigator);
