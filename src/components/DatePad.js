import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DatePad extends Component {
  //constructor() {
    //super(props);
  //}

  /* getHijridate(hdate) {
    const mm = hdate.substring(3, 5);
  }*/

  render() {
    const { container, textStyle } = styles;
    const { gdate, hdate } = this.props;

    console.log("gdate " + gdate);
    console.log("hdate " + hdate);

    //const md = this.getHijridate(hdate);
    //console.log('month: ' + hdate.month());

    return (
      <View style={container}>
        <Text style={textStyle}>
          TBA
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'lime',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
  }
};

export default DatePad;
