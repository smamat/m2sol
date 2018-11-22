import React from 'react';
import { View, Text } from 'react-native';

const AreaPad = () => {
  const { container, textStyle } = styles;

  return (
    <View style={container}>
      <Text style={textStyle}>
        Kelantan Selatan
      </Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 15,
  },
};

export default AreaPad;
