import React from 'react';
import { View, Text } from 'react-native';
import TimePad from './TimePad';

const PrayerPad = (props) => {
  //const { container } = styles;

  const times = props.times;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TimePad waktu='Subuh' time={times[0]} />
      </View>
      <View style={{ flex: 1 }}>
        <TimePad waktu='Zohor' time={times[1]} />
      </View>
      <View style={{ flex: 1 }}>
        <TimePad waktu='Asar' time={times[2]} />
      </View>
      <View style={{ flex: 1 }}>
        <TimePad waktu='Maghrib' time={times[3]} />
      </View>
      <View style={{ flex: 1 }}>
        <TimePad waktu='Isyak' time={times[4]} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'mediumseagreen',
    flex: 1,
  },
}

export default PrayerPad;
