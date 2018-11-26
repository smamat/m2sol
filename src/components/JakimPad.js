import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import DatePad from './DatePad';
import AreaPad from './AreaPad';
import PrayerPad from './PrayerPad';

/* global fetch:false */

class JakimPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      resp: [],
      area: 'WLY01',
      areas: ['JHR01', 'JHR02', 'JHR03', 'JHR04'],
      nArea: 0,
    };
  }

  componentWillMount = async () => {
    // url from a RESTful API = 'https://api.azanpro.com/times/today.json?zone=sgr01&format=12-hour';
    // url from e-Solat = 'https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=JHR01';
    const { area } = this.state;
    const url = `https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=${area}`;
    //const url3 = url2 + area;

    console.log('JakimPad will mount...');
    try {
      const response = await fetch(url);
      const resp = await response.json();

      this.setState({ loading: false, resp });
    } catch (e) {
      console.log(`Caught exception: ${e}`);
      this.setState({ loading: false, error: true });
    }
  }

  onPress() {
    const { areas, nArea } = this.state;
    const n = (nArea + 1) % areas.length;
    this.setState({ nArea: n, area: areas[n] });

    this.fetchData();
  }

  fetchData = async () => {
    const { area } = this.state;
    const url = `https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=${area}`;

    this.setState({ loading: true, error: false });

    console.log('fetchData...' + url);
    try {
      const response = await fetch(url);
      const resp = await response.json();

      this.setState({ loading: false, resp });
    } catch (e) {
      console.log(`Caught exception in fetchData(): ${e}`);
      this.setState({ loadin: false, error: true });
    }
  }

  render() {
    const { loading, error, resp, area } = this.state;

    if (loading) {
      console.log('still loading...');
      return (
        <View style={styles.container}>
          <AreaPad onPress={this.onPress.bind(this)} title={area} />
          <DatePad />
          <Text>Still loading PrayerPad</Text>
        </View>
      );
    }

    if (error) {
      console.log('caught error...');
      return (
        <View style={styles.container}>
          <AreaPad onPress={this.onPress.bind(this)} title={area} />
          <DatePad />
          <Text>Error loading PrayerPad</Text>
        </View>
      );
    }

    console.log('done loading...');

    // set salat times from fetched data
    const { prayerTime } = resp;
    const { fajr, dhuhr, asr, maghrib, isha, date, hijri } = prayerTime[0];
    const times = [fajr, dhuhr, asr, maghrib, isha];

    // format Gregorian and Hijri dates
    const gdate = moment(date, 'DD-MMM-YYYY').format('DD/MM/YYYY');
    const hdate = moment(hijri, 'YYYY-MM-DD').format('DD/MM/YYYY');

    console.log(resp);


    return (
      <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <AreaPad onPress={this.onPress.bind(this)} title={area} />
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
