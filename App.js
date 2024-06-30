import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Come on</Text>
        <Text>Israel</Text>
        <Text>Israel</Text>
        <Text>Israel</Text>
        <Text style={styles.text2}>Israel</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  text2: {
    color: 'blue',
  },
});
