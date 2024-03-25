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