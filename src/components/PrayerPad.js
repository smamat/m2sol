import React from 'react';
import { View, Text } from 'react-native';
import TimePad from './TimePad';

const PrayerPad = () => (
  <View>
    <TimePad name='Subuh' time='4:30 pm'/>
    <TimePad name='Zohor' time='4:30 pm'/>
    <TimePad name='Asar' time='4:30 pm'/>
    <TimePad name='Maghrib' time='4:30 pm'/>
    <TimePad name='Isyak' time='4:30 pm'/>
  </View>
);

export default PrayerPad;
