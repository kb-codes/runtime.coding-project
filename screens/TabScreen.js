import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ReactScreen from './ReactScreen';
import PythonScreen from './PythonScreen';
import DesignScreen from './DesignScreen';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator();
const ReactStack = createStackNavigator();
const PythonStack = createStackNavigator();
const DesignStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="#fff"
      tabBarColor="black"

    >
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0b5380',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="ReactScreen"
        component={ReactStackScreen}
        options={{
          tabBarLabel: 'React Native',
          tabBarColor: '#6093e6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="react" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="PythonScreen"
        component={PythonStackScreen}
        options={{
          tabBarLabel: 'Python',
          tabBarColor: '#82872a',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="language-python" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="DesignScreen"
        component={DesignStackScreen}
        options={{
          tabBarLabel: 'Design',
          tabBarColor: '#ba4159',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="sketch" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export default TabScreen;
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0b5380'
      },
      headerTintColor: '#fff'

    }}>

      <HomeStack.Screen name="Home" options={{
        title: false,
        headerLeft: () => (

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>

        )

      }} component={HomeScreen} />
    </HomeStack.Navigator>
  )
};

const DesignStackScreen = ({ navigation }) => {
  return (
    <DesignStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#ba4159'
      },
      headerTintColor: '#fff'

    }}>

      <DesignStack.Screen name="Design" options={{
        title: false,
        headerLeft: () => (

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>

        )

      }} component={DesignScreen} />
    </DesignStack.Navigator>
  )
};
const ReactStackScreen = ({ navigation }) => {
  return (
    <ReactStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#6093e6'
      },
      headerTintColor: '#fff'

    }}>

      <ReactStack.Screen name="React" options={{
        title: false,
        headerLeft: () => (

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>

        )

      }} component={ReactScreen} />
    </ReactStack.Navigator>
  )
};
const PythonStackScreen = ({ navigation }) => {
  return (
    <PythonStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#82872a'
      },
      headerTintColor: '#fff'

    }}>

      <PythonStack.Screen name="Python" options={{
        title: false,
        headerLeft: () => (

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>

        )

      }} component={PythonScreen} />
    </PythonStack.Navigator>
  )
};