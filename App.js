import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);


const img = require('./assets/concert.png')

export default function App() {
  const [numTickets, setNumTickets] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  const onPress = () => {
    setButtonPressed(true);
  }

  const onChangeText = newText => {
    setButtonPressed(false);
    setNumTickets(parseInt(newText))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>
      <TextInput style={styles.input} placeholder="Number of Tickets" onChangeText={onChangeText}></TextInput>
      <Pressable style={styles.button} onPress={onPress}><Text style={styles.buttonText}>Find the Cost</Text></Pressable>
      {buttonPressed 
        ? <Text style={styles.result}>Ticket Cost: ${numTickets * 99.99}</Text> 
        : <Text style={styles.result}></Text>}
      <Image source={img}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    fontSize: 25,
    padding: 8,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#f98b88',
    padding: 8,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 25,
  },
  result: {
    fontSize: 25,
    marginBottom: 50,
  }
});
