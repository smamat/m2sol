import React from 'react';
import { Text, View } from 'react-native';

const TimePad = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.waktu}</Text>
      <Text>{props.time}</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'olive',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default TimePad;
