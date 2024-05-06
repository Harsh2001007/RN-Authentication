import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';

export default function SubmitBtn({buttonText, method}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnStyling} onPress={method}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnStyling: {
    backgroundColor: GlobalStyles.colors.secondaryPurple,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  container: {
    marginTop: 28,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
