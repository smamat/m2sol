import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

// eslint-disable-line global-require

class LunarPad extends Component {
  onPress() {
    console.log('button clicked');
  }

  render() {
    return (
      <View>
        <Image
          source={require('../../assets/wgmoon.jpg')}
          style={styles.imageStyle}
        />
        <Button
          onPress={this.onPress}
          title='Click me!'
        />
        <Text style={styles.textStyle} >
          waning gibbous moon
        </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 12,
    color: 'white',
  },
  imageStyle: {
    height: 50,
    width: 75,
  },
  buttonStyle: {
    margin: 20,
    color: 'white',
  },
};

export default LunarPad;
