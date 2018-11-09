import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import LunarPad from './src/components/LunarPad';
import JakimPad from './src/components/JakimPad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lunarStyle}>
          <LunarPad />
        </View>
        <View style={styles.jakimStyle}>
          <JakimPad />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#ff0',
    flex: 1,
  },
  lunarStyle : {
    flex: 1,
  },
  jakimStyle : {
    flex: 2,
  },
});

//AppRegistry.registerComponent('m2sol', () => App);
