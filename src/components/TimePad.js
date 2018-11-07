import React from 'react';
import { Text, View } from 'react-native';

/*class TimePad extends React.Component {
  render() {
    return <Text>TimePad</Text>
  }
}*/

const TimePad = (props) => {
  //{ name, time } = props;
  return (
    <View style={styles.padStyle}>
      <View><Text>{props.name}</Text></View>
      <View><Text>{props.time}</Text></View>
      <View><Text>XXX</Text></View>
    </View>
  );
};

const styles = {
  padStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'green',
  },
};

export default TimePad;
