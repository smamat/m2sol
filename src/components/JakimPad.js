import React from 'react';
import { Text, View } from 'react-native';
import DatePad from './DatePad';
import AreaPad from './AreaPad';
import PrayerPad from './PrayerPad';

class JakimPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      resp: [],
    };
  }

  componentWillMount = async () => {
    const url = 'https://api.azanpro.com/times/today.json?zone=sgr01&format=12-hour';
    try {
      const response = await fetch(url);
      const resp = await response.json();

      this.setState({ loading: false, resp });
    } catch (e) {
      console.log('Caught exception: ' + e);
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { loading, error, resp } = this.state;

    if (loading) {
      console.log('still loading...');
      return (
        <View style={styles.container}>
          <DatePad />
          <AreaPad />
          <Text>Still loading PrayerPad</Text>
        </View>
      );
    }

    if (error) {
      console.log('caught error...');
      return (
        <View style={styles.container}>
          <DatePad />
          <AreaPad />
          //<PrayerPad msg='error'/>
          <Text>Error loading PrayerPad</Text>
        </View>
      );
    }

    console.log('finished loading...')
    const { subuh, zohor, asar, maghrib, isyak } = resp.prayer_times;

    //console.log('subuh: ' + subuh + ' zohor: ' + zohor);
    const times = [ subuh, zohor, asar, maghrib, isyak ];

    return (
      <View style={styles.container}>
        <DatePad />
        <AreaPad />
        <PrayerPad times={times} />
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'darkgreen',
  },
};

export default JakimPad;
