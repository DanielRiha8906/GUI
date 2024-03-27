import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [songName, setSongName] = useState('');
  const [ArtistName, setArtistName] = useState('');
  const [reviewText, setReviewText] = useState('');
// Async function, wait 'till it get's response from server, if everything is alright, it pushes you to /home

  const createReview = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        song_name: songName,
        artist_name: ArtistName,
        review_text: reviewText
      }),
    }
    const response = await fetch('http://192.168.80.150:8000/review', options);
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
        placeholder="Enter your username"
      />
            <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setSongName}
        value={songName}
        placeholder="Enter song name"
      />
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setArtistName}
        value={ArtistName}
        placeholder="Enter artist name"
      />
            <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setReviewText}
        value={reviewText}
        placeholder="Enter review text"
      />

      <Button title="Post Review" onPress={createReview} />
    </View>
  );
};

export default Login;
