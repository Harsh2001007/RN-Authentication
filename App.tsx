import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from './constants/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login-screen"
          component={Login}
          options={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primaryBlack},
            headerTintColor: GlobalStyles.colors.primarytext,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
