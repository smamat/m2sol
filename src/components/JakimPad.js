import React from 'react';
import { Text, View } from 'react-native';
import DatePad from './DatePad';
import AreaPad from './AreaPad';
import PrayerPad from './PrayerPad';
import moment from 'moment';

/* global fetch:false */

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
    //const url = 'https://api.azanpro.com/times/today.json?zone=sgr01&format=12-hour';
    const url = 'https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=WLY01';
    try {
      const response = await fetch(url);
      const resp = await response.json();

      this.setState({ loading: false, resp });
    } catch (e) {
      console.log(`Caught exception: ${e}`);
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
          <Text>Error loading PrayerPad</Text>
        </View>
      );
    }

    //console.log(`finished loading ${resp}`);
    //console.log(resp);
    const pt = resp.prayerTime;
    const { fajr, dhuhr, asr, maghrib, isha, date, hijri } = pt[0];

    //how to format date using moment()
    const gdate = moment(date, 'DD-MMM-YYYY').format('DD/MM/YYYY');
    const hdate = moment(hijri, 'YYYY-MM-DD').format('DD/MM/YYYY');
    console.log(`christian date: ${gdate.month()}`);
    console.log(`muslim date: ${hdate}`);

    const times = [fajr, dhuhr, asr, maghrib, isha];

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
        <DatePad gdate={gdate} hdate={hdate} />
        </View>
        <View style={{ flex: 1 }}>
        <AreaPad />
        </View>
        <View style={{ flex: 5 }}>
          <PrayerPad times={times} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'darkgreen',
    flex: 1,
  },
};

export default JakimPad;
