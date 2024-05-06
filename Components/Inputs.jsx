import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function Inputs({label, inputMethod, inputValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.lableStyle}>{label}</Text>
      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={inputMethod}
          value={inputValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lableStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  inputField: {
    height: 40,
    backgroundColor: '#FBDCC0',
    borderRadius: 6,
    marginTop: 4,
    paddingHorizontal: 6,
  },
  container: {
    marginTop: 24,
  },
});
