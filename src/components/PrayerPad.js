import React from 'react';
import { View } from 'react-native';
import TimePad from './TimePad';

const PrayerPad = (props) => {
  //const { container } = styles;

  const times = props.times;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'mediumseagreen' }}>
        <TimePad waktu='Subuh' time={times[0]} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'seagreen' }}>
        <TimePad waktu='Zohor' time={times[1]} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'forestgreen' }}>
        <TimePad waktu='Asar' time={times[2]} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <TimePad waktu='Maghrib' time={times[3]} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'darkgreen' }}>
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
};

export default PrayerPad;
