import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import TestIndex from "./src/Components/TestIndex";

export default function App() {
  return (
    <TestIndex/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
