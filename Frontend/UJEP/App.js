import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import Login from './login';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [responseData, setResponseData] = useState('');
  const [showButtons, setShowButtons] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handlePost = async () => {
    // Perform POST request here (you'll need to replace the URL with your actual endpoint)
    try {
      const response = await fetch('https://example.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputText || '' }),
      });
      // Assuming your server responds with JSON
      const data = await response.json();
      Alert.alert('Success', 'Data has been sent to the database');
    } catch (error) {
      Alert.alert('Error', 'Failed to send data to the database');
    }
  };

  const handleGet = async () => {
    // Perform GET request here (you'll need to replace the URL with your actual endpoint)
    try {
      const response = await fetch('https://example.com/api/data');
      const data = await response.json();
      setResponseData(JSON.stringify(data));
      setShowButtons(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data from the database');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <View>
          {showButtons ? (
            <>
              <TextInput
                style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={setInputText}
                value={inputText}
                placeholder="Enter data"
              />
              <Button title="Send Data (POST)" onPress={handlePost} />
              <Button title="Get Data (GET)" onPress={handleGet} />
            </>
          ) : (
            <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>{responseData}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default App;
