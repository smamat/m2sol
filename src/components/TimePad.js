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
      <Text style={styles.textStyle}>{props.waktu}</Text>
      <Text style={styles.textStyle}>{time}</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
};

export default TimePad;
