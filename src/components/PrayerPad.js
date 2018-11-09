import React from 'react';
import { View, Text } from 'react-native';
import TimePad from './TimePad';

const PrayerPad = (props) => {
  //const { container } = styles;

  const times = props.times;

  return (
    <View style={styles.container}>
      <TimePad waktu='Subuh' time={times[0]} />
      <TimePad waktu='Zohor' time={times[1]} />
      <TimePad waktu='Asar' time={times[2]} />
      <TimePad waktu='Maghrib' time={times[3]} />
      <TimePad waktu='Isyak' time={times[4]} />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'mediumseagreen',
  },
}
export default PrayerPad;
