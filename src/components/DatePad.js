import React from 'react';
import { View, Text } from 'react-native';

const DatePad = () => {
  const date = new Date();

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#555',
  },
  textStyle: {
    textAlign: 'center',
  }
};

export default DatePad;
