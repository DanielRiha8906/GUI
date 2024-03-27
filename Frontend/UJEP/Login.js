import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // You can add authentication logic here
    // For simplicity, let's just check if the username is not empty
    if (username.trim() !== '') {
      onLogin(username);
    } else {
      alert('Please enter a username');
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
