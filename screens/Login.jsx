import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../constants/styles';
import Inputs from '../Components/Inputs';
import SubmitBtn from '../Components/SubmitBtn';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const handleButtonPress = () => {
    console.log(inputValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Inputs
          label={'Email Address'}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Inputs
          label={'Password'}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <SubmitBtn buttonText={'Log In'} onPress={handleButtonPress} />
        <Pressable style={styles.newUser}>
          <Text style={{color: 'white'}}>Create a new user</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.secondaryPurple,
    flex: 1,
  },
  fieldContainer: {
    height: '40%',
    width: '80%',
    backgroundColor: GlobalStyles.colors.primaryBlack,
    marginTop: '15%',
    marginLeft: '10%',
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  newUser: {
    borderColor: GlobalStyles.colors.secondaryPurple,
    borderWidth: 1,
    marginTop: 14,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 6,
  },
});
