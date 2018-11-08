import React from 'react';
import { View, Text } from 'react-native';
import TimePad from './TimePad';

const PrayerPad = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        PrayerPad
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'green',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
}
export default PrayerPad;
