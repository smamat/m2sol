import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import PrayerPad from './src/components/PrayerPad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PrayerPad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

//AppRegistry.registerComponent('m2sol', () => App);
