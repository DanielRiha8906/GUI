import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

// export main function, which will give us a login screen
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
// button for testing purposes. Utilizing router to push it to home adress
  const bypass = () => {
    router.push('/home');
  }
  // Async Function, which specifies in which format the data I have recieved will be,
  // It awaits connection to get server from server,
  const handleLogin = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
    const response = await fetch('http://192.168.80.150:8000/auth/token', options);
    if (!response.ok) {
        alert('Please enter a username');
    } else {
        router.push('/home');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter username"
      />
            <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter password"
      />

      <Button title="Login" onPress={handleLogin} />
      <Button title="TMP" onPress={bypass} />
    </View>
  );
};

export default Login;
