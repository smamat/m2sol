import React from 'react';
import { View, Text } from 'react-native';

const DatePad = () => {
  const date = new Date();
  return (
    <View style={styles.dateStyle}>
      <Text>{date.toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = {
  dateStyle: {
    height:50,
  },
};

export default DatePad;
