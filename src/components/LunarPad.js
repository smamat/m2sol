import React from 'react';
import { View, Text, Image } from 'react-native';

const LunarPad = () => (
    <View>
      <Image
        source={require('../../assets/wgmoon.jpg')}
        style={styles.imageStyle}
      />
      <Text
        style={styles.textStyle}
      >
        waning gibbous moon
      </Text>
    </View>
  );

const styles = {
  textStyle: {
    fontSize: 12,
    color: 'white',
  },
  imageStyle: {
    height: 50,
    width: 75,
  },
};

export default LunarPad;
