
# GUI

## What is React Native?

React Native is an open-source framework that enables users to create native applications using JavaScript and React. It is very popular with a lot of support, developed by Meta Platforms, Inc. Therefore, websites and applications like Facebook, Instagram, and WhatsApp are built with it.

## Why should I use it?

React Native allows developers to write code once and then use it across multiple platforms, whether it's Android, iOS, or web applications.

## How to Begin?


For today's work, you will need [Node.js](https://nodejs.org/en/download/current). After that, you can either use the [Expo go](https://expo.dev/go) mobile app (available on Google Play Store and Apple App Store) or [Android Studio](https://developer.android.com/studio) for working on your computer.

It's possible that the mobile app might not work on school computers, so if you're on school computers, please use Android Studio instead. I will also be using Android Studio for demonstration purposes.

## Documentation + teaching materials

Official documentation is [here](https://reactnative.dev/docs/getting-started).

Videos I have used for studying this framework are here:
 
[video_1](www.youtube.com/watch?v=VozPNrt-LfE&t)

[video_2](www.youtube.com/watch?v=0-S5a0eXPoc&t)

## Inicialization

In your working directory in which you would like to develop, please type this into CMD

```
npm create-expo-app jmeno_appky
```
Here is how Android studio should look like when you launch it.


<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/Frontend/images/Android.png">


Please click on more actions and manage virtual device

<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/Frontend/images/more_actions.png">


Click the "play" button 


<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/Frontend/images/sum.png">


## Components
Now let's get started with some work. React Native operates on a component-based system, where components are displayed differently for Android, iOS, and web. Today, we'll be using View, Text, Image, and TextInput components.

Let's start with some simple text rendering on the screen.

```ts
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Ujep = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, I am Daniel and I will be presenting this course!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ujep;

```
Here is an easy 'Hello World!' type of example.


## Variables

JavaScript is a dynamically typed language. There are three types of variables: 'var', 'let', and 'const', which always must be declared before they are used.

var: It is always global, can be redeclared, and its value can be changed.
let: It is block-scoped, cannot be redeclared, and its value can be changed.
const: It is block-scoped, cannot be redeclared, and its value cannot be changed -> const as constant.
Now let's take a look at some code examples where we use variables within the displayed text.

```ts
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Ujep = () => {
  const name = 'Daniel';
  const course_name = 'GUI';
  return (
    <View style={styles.container}>
      <Text>Hello, I am {name} and I will be presenting this {course_name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ujep;


```

## Use state


An important concept for user input, text changing, button functionality, and similiar functionalities is something called "state."

In React Native, "state" is an object that holds data and determines how a particular component behaves and looks at a certain time. Each component can have its own state. State is used to store data that may change over time and affect the appearance and behavior of the component.

Using "state" in React Native is important for creating interactive user interfaces. When a component's state changes, React automatically re-renders the component to update its appearance and behavior according to the new state.

```ts
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ButtonIncrease = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>State value is: {count}</Text>
      <Button title="Click me!" onPress={increaseCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default ButtonIncrease;

```

The important aspects of this code are the creation of the useState hook and the creation of functions that the button will utilize.

## Text input


Now that we know how to perform some simple text rendering on the screen and utilize buttons, let's dive into using text input.

```ts
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ChangeTextApp = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleButtonPress = () => {
    setDisplayText(text);
    setText('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{displayText}</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
        onChangeText={setText}
        value={text}
      />
      <Button title="Change Text" onPress={handleButtonPress} />
    </View>
  );
};

export default ChangeTextApp;
```
## Individual work


Create your own application for a simple clicking game.

You will have a text displaying the current HP of the enemy, and when their HP drops below zero, display an Alert.

The application will have 3 buttons and 1 text input: Attack!, set enemy HP, and reset enemy HP.



<details>
<summary>
My solution:
</summary>

```ts
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

const EnemyBattleApp = () => {
  const [enemyHP, setEnemyHP] = useState(100);
  const [enemyMaxHP, setEnemyMaxHP] = useState(100);

  const decreaseEnemyHP = () => {
    setEnemyHP(enemyHP - 10);
    if (enemyHP <= 0) {
      Alert.alert('Congratulations!', 'You have defeated your enemy');
    }
  };

  const resetEnemyHP = () => {
    setEnemyHP(enemyMaxHP);
  };

  const setEnemyMaxHPValue = () => {
    setEnemyMaxHP(parseInt(enemyMaxHPInput));
    Alert.alert(`Enemy HP has been set to ${enemyMaxHPInput}`);
  };

  let enemyMaxHPInput = '';

  return (
    <View style={styles.container}>
      <Text>Enemy HP: {enemyHP}</Text>
      <Text>Enemy Max HP: {enemyMaxHP}</Text>
      <Button title="Attack Enemy" onPress={decreaseEnemyHP} style={styles.button} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Enemy Max HP"
          onChangeText={text => enemyMaxHPInput = text}
          keyboardType="numeric"
        />
        <View style={{ padding: 30 }}>
          <Button title="Set Enemy Max HP" onPress={setEnemyMaxHPValue} style={styles.button} />
        </View>
      </View>
      <Button title="Reset Enemy HP" onPress={resetEnemyHP} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default EnemyBattleApp;

```
</details>

## Project

Alright, let's dive into the larger project that we've prepared for you.

This project will be a simple mobile application where users can log in and then add posts regarding their own opinions on various songs.

So, for example, a typical post could look like this:

"Pepa likes 'Garbage Truck' by Sex Bob-Omb."

## Login 


Let's create a folder named /app and inside it, we'll create the program index.js.

Inside the `/app` folder, please create a folder named `home`, where we'll put files for various functionalities such as `GET, POST, and PATCH` methods. This structure will also serve us well for utilizing a drawer menu as our navigation bar. Now, please add a file named `login.js` to the `/app` folder.

In the `login.js` file, we'll implement our login functionality for the application.


<details>
<summary>
My implementation: 
</summary>

  ```ts  
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


```


In this code, you can notice how I access the page. I will create a constant where I'll store the IP address of our page. Please note that it won't work on the same IP as mine, so please use the `ipconfig` command in your command prompt to find the correct IP address.
</details>


## Main page

Let's create the main page where we'll be redirected after successful login.

I would implement the main page in such a way that it displays posts from users, containing their username, band name, song, and a review of the song.

Please create a file named `index.js` in the `home` directory.

In this file, we'll use `useState` for data management and `useEffect` to fetch data from the `/reviews` endpoint, which we'll then display on the screen.

<details>
<summary>
  index.js
</summary> 
  
```ts  
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {SafeAreaProvider } from 'react-native-safe-area-context';
// Main page which will constantly show us all data, that have been pushed to it.

const App = () => {
  const [data, setData] = useState([]);

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
              </View>
            );
          })}
    </View>
    </SafeAreaProvider >
  );
};

export default App;
```

After filling the database with some data, you will see, that it does not look remarkable, so please take this with a grain of salt as a proof of concept. 
All of this code is open source, so if you'd like to use it in your own project and then just give it a nice "face" go for it. 
</details>


## Drawer

We will implement a drawer in the file `_layout.js` in the `home` folder. 

<details>
<summary>
  _layout.js:
</summary>
  
  ```ts
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
// Function for drawer layout
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}
```
</details>


## POST

Let's create a file for adding posts to our app. Please create a file  `create.js` in the `home` directory, in which the `POST` method for creating a post will be. 

<details>
<summary>
  create.js
</summary>

 ```ts
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

```

</details>


## Update


Out of the CRUD operations, we currently have `GET` and `POST`. Let's now create `UPDATE`.

The update operation will only overwrite the review for a specific song. Since the author and song name probably won't change, in the backend, `UPDATE` and `DELETE` are implemented by accessing the posts via their IDs. Therefore, we'll need to create a way to access individual posts.

In our case, this needs to be done using [dynamic routing](https://docs.expo.dev/router/create-pages/#dynamic-routes).

So let's create a folder named `update`, and inside it, create a file named `[slug].js`.

<details>
<summary>
[slug].js
</summary>

```ts
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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setReviewText}
        value={reviewText}
        placeholder="Enter review text"
      />
      <Button title="Post Review" onPress={updateReview} />
    </View>
  );
};

export default Update;

```


</details>

Now that we have a way to access individual posts, we need to implement it in the application itself. The simplest way to do this is to add a button for each post that redirects to this link. Therefore, please modify the `index.js` file in a way that it renders an additional button for each post. When clicked, this button should redirect to the corresponding update page.



<details>
<summary>
Řešení:
</summary>
  
```ts

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

```

</details>


## Independent work at the end:

Now that we have CRUD methods, it's time to add the `DELETE` functionality. Please try to implement the delete option using everything I've shown you today.

I leave the implementation entirely up to you. For example, I added the delete option to the `[slug].js` file and then added functionality to the main page.

As an example solution, you can refer to the project already built in the UJEP repository.

## Motivation at the end:

If we have time left, I'll show you a project I worked on for Dr. Fišer and Dr. Škvor.

### Assignment:

Create a mobile application that supports ad-hoc communication, with two sides - student and teacher.

Teacher - on their side, they will have an interface showing which student is present in the class, potentially be able to manually add students and give them a + when they are active. (still a Work in Progress)

Student - logs in using the mobile app and scans the QR code of the chair they are sitting on, which will be recorded in the teacher's database.

[Link to the Repository](https://github.com/DanielRiha8906/APR2_projekt)

# Thank you very much for your attention, enjoy your lunch!
