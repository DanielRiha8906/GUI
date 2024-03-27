import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {SafeAreaProvider } from 'react-native-safe-area-context';
// Main page which will constantly show us all data, that have been pushed to it.

const App = () => {
  const [data, setData] = useState([]);

  const RenderUpdate = (id ) => {
    router.push(`/home/update/${id}`);
  };
  const RenderDelete = (id) => {
    router.push(`/home/update/${id}`);
  }
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch('http://192.168.80.150:8000/reviews', options)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => console.log(error));
      // the [data] component is really important, otherwise it would reload constantly
  }, [data]);

  return (
    // Safe Area Provider is for the text, to not get out of screen, if you post a long review, or the song is long, it will mash the text together,
    // Could be implemented better, but this is the only way I found.
    <SafeAreaProvider >
    <View style={{ flex: 1 }} >
          {data.map((item, index) => {
            return (
              <View key={index} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text>{item.id}</Text>
                <Text>{item.username}</Text>
                <Text>{item.song_name}</Text>
                <Text>{item.artist_name}</Text>
                <Text>{item.review_text}</Text>
                <Button
                  title="Update"
                  onPress={() => RenderUpdate(item.id)}
                />
              </View>
            );
          })}
    </View>
    </SafeAreaProvider >
  );
};

export default App;
