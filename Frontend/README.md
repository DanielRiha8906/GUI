# GUI

## Co to je React native?

React Native je open-source framework, který umožňuje uživatelům vytvářet nativní aplikace, které využívají JavaScript a React. Je velmi populární s hodně supportem, za vývojem stojí Meta Platforms, Inc.
Tudíž jsou v tom napsané weby a aplikace typu Facebook, Instagram a WhatsUp. 

## Proč se to využívá?
React native umožňuje vývojářům udělat kód jednou a pak ho využít v rámci více platforem - Ať už je to Android, IOS, Webovky.

## Začátek projektu 
K dnešní práci budete potřebovat [node](https://nodejs.org/en/download/current)
Poté buď aplikaci [Expo go](https://expo.dev/go) na mobilech (Google store, Apple store) nebo [Android Studio](https://developer.android.com/studio) pro práci na počítači.

Je možné, že vám to na školních počítačích nebude fungovat s mobilní aplikací, tudíž zdali jste na školních počítačích prosím využívejte Android Studio. Pro ukázku ho budu využívat i já.

## Dokumentace + materiály 
[Oficiální dokumentace](https://reactnative.dev/docs/getting-started) je tady.
Popřípadě videa, které jsem využil na dnešní projekt: 
[video_1](www.youtube.com/watch?v=VozPNrt-LfE&t)

[video_2](www.youtube.com/watch?v=0-S5a0eXPoc&t)

## Iniciace 
V své working directory si prosím otevřte command line a napište tam toto:

```
npm create-expo-app jmeno_appky
```
Tady máme zapnuté Android Studio
<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/images/Android.png"/>
Klikneme na More actions, Virtual device manager 
<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/images/more_actions.png"/>
Zmáčkneme play Button
<img src="https://raw.githubusercontent.com/DanielRiha8906/GUI/main/images/sum.png" />

## Komponenty
Teďka začneme již s nějakou tu prací. React Native funguje na bázi komponentů, které se zobrazují jinak pro Android, IOS, web. 
Dnes budem využívat View, Text, Image a Text Input.

Začneme s nějakým jednoduchým vypsáním na obrazovku. 

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
Tady máme příklad nějakého jednoduchého 'Hello World' příkladu


## Proměnné 
Java script je dynamicky typovaný jazyk. Existují tři typy proměnných. 'var', 'let' a 'const', které se vždy musí deklarovat před tím, než je využijeme.

var - Je vždy globální, dá se redeklarovat, měnit její hodnotu

let - Je bloková, nedá se redeklarovat a dá se měnit její hodnota

const - Je bloková, nedá se redeklarovat a nedá se měnit její hodnota -> const jako constant 

Teď si dáme ukázku kódu, kde do vypisovaného textu dáme proměnné. 

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

Důležitá věc, pro user input, měnění textu, funkčnosti tlačítek a podobně je věc, které se říká use state.

V React Native je "state" objekt, který obsahuje data a určuje, jak se daná komponenta chová a vypadá v určitém čase. Každá komponenta může mít svůj vlastní stav. Stav se používá k uchování dat, která se mohou v průběhu času měnit a ovlivňovat vzhled a chování komponenty.

Použití "state" v React Native je důležité pro vytváření interaktivních uživatelských rozhraní. Když se stav komponenty změní, React automaticky znovu vykreslí komponentu, aby se její vzhled a chování aktualizovaly podle nového stavu.

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

Důležité věci v tomhle kódu jsou vytvoření hooku use state, vytvoření funkci, které bude tlačítko využít. 

## Text input

Nyní víme jak dělat nějaké jednoduché vypisování na obrazovku, využívat button tak se pojďme pustit do využití text inputu. 

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
## Práce

Vytvořte si svojí vlastní aplikaci na nějakou jednoduchou klikací hru. 

Budete tam mít text, který bude ukazovat current HP enemáka, a v moment, kdy jeho HP padne pod nulu, tak vyhoďte Alert.

Aplikace bude mít 3 buttony a 1 text input: Attack!, nastavení HP enemáků a reset hp enemy. 



<details>
<summary>
Ukázka řešení:
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

## Projekt

Ok, teďka se pustíme do většího programu, který jsme pro vás připravili. 

Tento projekt bude jednoduchá mobilní aplikace, kde se lidi přihlásí a poté mohou k jednotlivým písničkám přidávat posty ohledně svých vlastní názory na ně.

Tudíž například klasický post by mohl vypadat takto: 

Pepa má rád od Sex Bob-Omb Garbage truck. 

## Login 

Vytvoříme si složku `/app` a vně vytvoříme program index.js

V složce app si prosím vytvořte složku home, kam potom budeme házet soubory s jednotlivými funkcionalitami, jako je `GET, POST a PATCH` method. Bude nám to sloužit i pro to, že budeme na naše menu využívat drawer (šuplík) aka lištu na straně, která bude náš nav bar. Teď si prosím do složky app přidejte soubor `login.js`


V souboru `login.js` bude náš login do aplikace. 


<details>
<summary>
Má implementace: 
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

V tomto kódu si můžete všimnout, jak přistupuji k stránce. vytvořím si konstantu, kam si zapíšu ip naší stránky (Nebude vám to fungovat na stejné IP jako na té mojí, takže so do cmd outletu napište prosím ipconfig a najděte si tu správnou.
</details>


## Main page

Pojďme udělat hlavní stránku, kam nás to přesměruje po uskutečněném loginu.

Implementoval bych hlavní stránku tak, že na ní budou vypsány posty od lidí, kde budeme mít username, jméno kapely, písničky a review na samotnou písničku.

Ve složce home si prosím vytvořte soubor `index.js`

V tomto souboru bude useState na data, useEffect, ve kterém budeme dostávat z endpointu /reviews data, které potom vypíšeme na obrazovku.

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

Vím, tento výpis nevypadá úplně nejlépe, ale počítejte s tímto projektem spíše jako proof of concept. 
</details>


## Drawer

Víše zmínění šuplík implementujeme v souboru `_layout.js` ve složce `home`. 

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

Pojďme si teď vytvořit soubor `create.js` v složce `home`, který nám bude vytvářet post samotný. 

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


Z CRUD operací máme zatím `GET` a `POST`, pojďme vytvořit `UDPATE`.

Update bude přepisovat jen samotnou recenzi, na danou písničku. Jelikož se asi autor a název písně nezměnil, v backendu je `UPDATE` a `DELETE` realizován pomocí toho, že k samotným příspěvkům se přistupuje pomocí id. Tudíž si budeme muset vytvořit způsob, jak přistupovat k samontým příspěvkům.

Což se v našem případě musí realizovat pomocí [dynamického routingu](https://docs.expo.dev/router/create-pages/#dynamic-routes)

Pojďme si tedy vytvořit složku `update` a v ní soubor `[slug].js`

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

A teď máme přístup, jak k ním přistupovat, nýbrž to musíme i nějak naimplementovat v samotné aplikaci. Nejjednodušší způsob jak toto udělat je, za každý přidat tlačítko, které je přepošle na tento odkaz. Tudíž prosím, upravte si v souboru `index.js` to view tak, aby se tam renderoval o button navíc, který na zmáčknutí bude mít funkcionalitu toho, že ho to přesměruje sem. 



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


## Samostatná práce na konec:

Nyní Máme CRU metody, je čas tam přidat i ten `DELETE`. Zkuste tedy prosím pomocí toho všeho, co jsem vám dnes ukázal přidat do této aplikace delete možnost. 

Implementaci nechávám čistě na vás. Já jsem například delete možnost přidat do `[slug].js` a poté přidal funkcionalitu na hlavní stránku.

Tady jako ukázku řešení můžete brát Projekt, který je již postaven v repozitáři UJEP. 


## Motivace na konec:


Zdali nám zbyl čas, tak vám tady ukazuji projekt, který jsem dělal pro pana doktora Fišera a pana doktora Škvora.

### Zadání:

Udělat aplikaci na mobil, která bude supportovat ad-hoc komunikaci, kde budou dvě strany - student a učitel.

Učitel - na své straně bude mít na své straně rozhraní, které bude ukazovat jaký student je přítomen v hodině, bude moct potenciálně manuálně přidávat studenty a dávat jím +, když jsou aktivní. (stále Work in progress)

Studnet - Se přihlásí pomocí mobilní aplikace a načte si QR kód židle, na které sedí, která se propíše učiteli do databáze. 

[Odkaz na Repo](https://github.com/DanielRiha8906/APR2_projekt)


#Děkuji moc za pozornost, užijte si oběd!
