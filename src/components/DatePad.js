import React from 'react';
import { View, Text } from 'react-native';

const DatePad = () => {
  const date = new Date();

  const { container, textStyle } = styles;

  return (
    <View style={container}>
      <Text style={textStyle}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'lime',
  },
  textStyle: {
    textAlign: 'center',
  }
};

export default DatePad;
