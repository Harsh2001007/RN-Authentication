import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 28}}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primaryBlack,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
