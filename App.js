import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import LunarPad from './src/components/LunarPad';
import DatePad from './src/components/DatePad';
import AreaPad from './src/components/AreaPad';
import PrayerPad from './src/components/PrayerPad';
import JakimPad from './src/components/JakimPad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LunarPad />
        <JakimPad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    justifyContent: 'center',
    marginTop: 25,
  },
});

//AppRegistry.registerComponent('m2sol', () => App);
