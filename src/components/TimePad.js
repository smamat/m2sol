import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
//import Moment from 'react-moment';

const TimePad = (props) => {
  let time = new moment(props.time, 'hh:mm:ss');
  time = time.format('hh:mm a');
  console.log(`TimePad time: ${time}`);

  return (
    <View style={styles.container}>
      <Text>{props.waktu}</Text>
      <Text>{time}</Text>
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
