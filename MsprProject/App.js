import React from "react";
import { StyleSheet } from 'react-native';

import Navigation from "./routes/Navigation";

export default function App() {
  return (
      <Navigation style={styles.container}/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})