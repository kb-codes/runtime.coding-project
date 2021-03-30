import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from "./WelcomeScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerMenu(navigation) {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen">
            <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Drawer.Screen name="SignIn" component={SignIn} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
    );

}

function Navigation(navigation) {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn}
                    options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp}
                    options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="DrawerMenu" component={DrawerMenu}
                    options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;