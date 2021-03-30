import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import TabScreen from './screens/TabScreen';
import { DrawerContent } from './screens/DrawerContent';
import ProfileScreen from './screens/ProfileScreen';
import BookMarkScreen from './screens/BookMarkScreen';
import SettingScreen from './screens/SettingScreen';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';
import { View } from 'native-base';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/contex';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App = (props) => {

  const [isDark, setIsDark] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#333'
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333',
      text: '#fff'
    }
  }
  const theme = isDark ? CustomDarkTheme : CustomDefaultTheme;
  const intialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const authContext = React.useMemo(() => ({
    signIn: (username, pass) => {
      setUserToken('sda');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('sda');
      setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDark(isDark => !isDark);
    }
  }))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {userToken != null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={TabScreen} />
              <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
              <Drawer.Screen name="BookMarkScreen" component={BookMarkScreen} />
              <Drawer.Screen name="SettingScreen" component={SettingScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />

            </Drawer.Navigator>

          ) : <RootStackScreen />}


        </NavigationContainer >
      </AuthContext.Provider>
    </PaperProvider>
  );
}
export default App;
