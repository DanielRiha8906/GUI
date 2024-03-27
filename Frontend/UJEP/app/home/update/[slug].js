import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Update = () => {
  const { slug } = useLocalSearchParams();

  const [reviewText, setReviewText] = useState('');

  const updateReview = async () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const response = await fetch('http://192.168.80.150:8000/review/' + slug+ "?review_text=" + reviewText, options);
    if (!response.ok) {
        alert('Please enter a username');
    } else {
        router.back();
    }
  };

  useEffect(() => {
    fetch(`http://192.168.80.150:8000/review/${slug}`)
      .then((response) => response.json())
      .then((responseData) => {
        setReviewText(responseData.review_text);
      })
      .catch((error) => console.log(error));
  }, []);
  const deleteReview = async () => {
    try {
      const response = await fetch(`http://192.168.80.150:8000/review/${slug}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete review');
      }
      Alert.alert('Success', 'Review deleted successfully');
      // Optionally navigate back to the previous screen or perform any other actions
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to delete review');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setReviewText}
        value={reviewText}
        placeholder="Enter review text"
      />

      <Button title="Post Review" onPress={updateReview} />
      <Button title="Delete Review" onPress ={deleteReview}/>
    </View>
  );
};

export default Update;
