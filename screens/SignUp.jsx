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
import {createUser} from '../utils/auth';
import {AuthContext} from '../store/auth-context';

export default function SignUP({navigation}) {
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [confirmEmailInput, setConfirmEmailInput] = useState('');
  const [contactInput, setContactInput] = useState('');

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

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

  async function signUpHandler() {
    setIsAuthenticating(true);
    const token = await createUser(emailInput, passInput)
      .then(() => {
        console.log('user created', emailInput, passInput);
        authCtx.authenticate(token);
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'Authentication failed',
          'Unable to create user, please check your input and try again later.',
        );
      });
  }

  async function signUpHandler() {
    setIsAuthenticating(true);
    try {
      const token = await createUser(emailInput, passInput);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Unable to sign up',
        'Please check your inputs or try again later',
      );
      setIsAuthenticating(false);
    }
  }

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

        <SubmitBtn buttonText={'Sign up'} method={signUpHandler} />
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
