import React from 'react';
import moment from 'moment';
import { Text, View, Button } from 'react-native';
import DatePad from './DatePad';
import AreaPad from './AreaPad';
import PrayerPad from './PrayerPad';

/* global fetch:false */

class JakimPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      area: 'WLY01',
      areas: ['JHRO1', 'JHR02', 'JHR03', 'JHR04'],
      nArea: 0,
      loading: true,
      error: false,
      resp: [],
    };
  }

  onPress() {
    console.log('AreaPad pressed');
  }

  componentWillMount = async () => {
    //const url = 'https://api.azanpro.com/times/today.json?zone=sgr01&format=12-hour';
    const nArea = this.state.nArea;
    const areas = this.state.areas;
    const area = areas[nArea];
    const url = 'https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=' + area;
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
          <AreaPad />
          <DatePad />
          <Text>Still loading PrayerPad</Text>
        </View>
      );
    }

    if (error) {
      console.log('caught error...');
      return (
        <View style={styles.container}>
          <AreaPad />
          <DatePad />
          <Text>Error loading PrayerPad</Text>
        </View>
      );
    }

    const pt = resp.prayerTime;
    const { fajr, dhuhr, asr, maghrib, isha, date, hijri } = pt[0];

    //how to format date using moment()
    const gdate = moment(date, 'DD-MMM-YYYY').format('DD/MM/YYYY');
    const hdate = moment(hijri, 'YYYY-MM-DD').format('DD/MM/YYYY');

    const times = [fajr, dhuhr, asr, maghrib, isha];

    console.log('JakimPad');
    console.log(pt);

    return (
      <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Button onPress={this.onPress} title='Click me!' />
          </View>
        <View style={{ flex: 1 }}>
          <DatePad gdate={gdate} hdate={hdate} />
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
