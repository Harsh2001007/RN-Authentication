import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {GlobalStyles} from '../constants/styles';
import Inputs from '../Components/Inputs';
import SubmitBtn from '../Components/SubmitBtn';
import {login} from '../utils/auth';
import {AuthContext} from '../store/auth-context';

export default function Login({navigation}) {
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleEmailInput = text => {
    setEmailInput(text);
  };

  const handlePassInput = text => {
    setPassInput(text);
  };

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login(emailInput, passInput);
      console.log('user logged in ', token);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Unable to log in',
        'Please check your credentials and try again',
      );
    }
  }

  const createAccountHandler = () => {
    navigation.navigate('Signup-screen');
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
          label={'Pasword'}
          inputValue={passInput}
          inputMethod={handlePassInput}
          securityOption={true}
        />

        <SubmitBtn buttonText={'Log In'} method={loginHandler} />
        <Pressable style={styles.newUser} onPress={createAccountHandler}>
          <Text style={{color: 'white'}}>Create Account</Text>
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
