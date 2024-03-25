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

</details>
