import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import PrayerPad from './src/components/PrayerPad';
import DatePad from './src/components/DatePad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DatePad />
        <PrayerPad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('m2sol', () => App);
