import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../constants/styles';
import Inputs from '../Components/Inputs';
import SubmitBtn from '../Components/SubmitBtn';

export default function SignUP({navigation}) {
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [confirmEmailInput, setConfirmEmailInput] = useState('');
  const [contactInput, setContactInput] = useState('');

  const handleEmailInput = text => {
    setEmailInput(text);
  };

  const handleConfirmEmailInput = text => {
    setConfirmEmailInput(text);
  };

  const handlePassInput = text => {
    setPassInput(text);
  };

  const handleContactInput = text => {
    setContactInput(text);
  };

  const handleButtonPress = () => {
    console.log(emailInput + passInput + contactInput + confirmEmailInput);
  };

  const loginAccountHandler = () => {
    navigation.navigate('Login-screen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Inputs
          label={'Email'}
          inputValue={emailInput}
          inputMethod={handleEmailInput}
        />
        <Inputs
          label={'Confirm Email'}
          inputValue={confirmEmailInput}
          inputMethod={handleConfirmEmailInput}
        />
        <Inputs
          label={'Password'}
          inputValue={passInput}
          inputMethod={handlePassInput}
        />
        <Inputs
          label={'Mobile'}
          inputValue={contactInput}
          inputMethod={handleContactInput}
        />

        <SubmitBtn buttonText={'Log In'} method={handleButtonPress} />
        <Pressable style={styles.newUser} onPress={loginAccountHandler}>
          <Text style={{color: 'white'}}>Log In Instead</Text>
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
    height: '65%',
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
