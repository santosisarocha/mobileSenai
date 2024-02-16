import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import Home from "./components/home";
import Products from "./components/products";
import Login from "./components/login";
const stack = createStackNavigator()

export default function Routers(){
    return (
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
                />
            <stack.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}}
                />
            <stack.Screen
                name="Products"
                component={Products}
                options={{headerShown:false}}
            />
            </stack.Navigator>
        </NavigationContainer>
    );
}