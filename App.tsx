import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from './constants/styles';
import SignUP from './screens/SignUp';
import Welcome from './screens/Welcome';
import AuthContextProvider, {AuthContext} from './store/auth-context';

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome-screen" component={Welcome} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login-screen"
        component={Login}
        options={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primaryBlack},
          headerTintColor: GlobalStyles.colors.primarytext,
        }}
      />
      <Stack.Screen
        name="Signup-screen"
        component={SignUP}
        options={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primaryBlack},
          headerTintColor: GlobalStyles.colors.primarytext,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
