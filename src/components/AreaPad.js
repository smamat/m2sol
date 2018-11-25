import React from 'react';
import { View, Text, Button } from 'react-native';

const AreaPad = (props) => {
  const { container, textStyle } = styles;

  return (
    <View style={container}>
      <Button onPress={props.onPress} title={props.title} />
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
