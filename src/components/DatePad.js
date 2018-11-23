import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import imoment from 'moment-hijri';

class DatePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gdate: moment().format('DD/MM/YYYY'),
      hdate: imoment().format('iDD/iMM/iYYYY'),
    };
  }

  render() {
    const { container, textStyle } = styles;

    return (
      <View style={container}>
        <Text style={textStyle}>{this.state.gdate} -- {this.state.hdate}</Text>
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
