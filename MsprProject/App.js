import React from "react";
import { StyleSheet } from 'react-native';
import Navigation from "./routes/Navigation";
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { LogBox } from "react-native";

LogBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

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