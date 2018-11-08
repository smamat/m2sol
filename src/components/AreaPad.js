import React from 'react';
import { View, Text } from 'react-native';

const AreaPad = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        Kelantan Selatan
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'blue',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
};

export default AreaPad;
