import axios from 'axios';

const API_KEY = 'AIzaSyBQgqllR5l6kjylB0F5fzu8JAnYFhtI5Bo';

export async function createUser(email, password) {
  await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
