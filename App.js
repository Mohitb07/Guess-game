import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Starter from './screens/Starter';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess game"/>
      <Starter/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
