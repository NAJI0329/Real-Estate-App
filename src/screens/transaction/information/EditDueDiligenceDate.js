import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Calendar} from 'react-native-calendars';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {
  black1,
  color19,
  color20,
  color21,
  color22,
  color33,
  color46,
  gray1,
  primaryMain,
} from '../../../ui/common/colors';

import MainActionButton from '../../../components/MainActionButton';
import g_styles from '../../../ui/common/styles';
import {changeDatetoISOString, formatDate} from '../../../utils';

const calendar = require('./../../../../assets/images/calendar.png');
const timeImg = require('./../../../../assets/images/time.png');

const EditDueDiligenceDate = ({navigation}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [openEnd, setOpenEnd] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const [openDeadline, setOpenDeadline] = useState(false);

  const [markedDates, setMarketdDates] = useState({});

  const selectedStyle = {
    selected: true,
    selectedColor: color21,
  };

  const dotStyle = {marked: true, dotColor: color19, activeOpacity: 0};

  const commonStyle = {
    customStyles: {
      container: {
        backgroundColor: color22,
        borderRadius: 0,
      },
      text: {
        color: color33,
        fontSize: 14,
        lineHeight: 20,
      },
    },
  };

  useEffect(() => {
    let temp = {};
    // Start Date
    temp[changeDatetoISOString(startDate)] = selectedStyle;
    // Between Dates
    let s = new Date(startDate);
    s.setDate(s.getDate() + 1);
    for (var d = s; d <= new Date(endDate); d.setDate(d.getDate() + 1)) {
      temp[changeDatetoISOString(d)] = commonStyle;
    }
    // End Dates
    temp[changeDatetoISOString(endDate)] = selectedStyle;
    // Set Dates Data to Calender Provider
    setMarketdDates(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'Edit Due Diligence Date'}
        prevPath={'ConfirmInformation'}
        closePath="SignIn"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Option Period</Text>
          <View style={g_styles.flex}>
            <View style={[g_styles.w_p50, g_styles.pr_10]}>
              <Text style={styles.label}>Starting Date</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setOpenStart(true)}>
                <Image source={calendar} />
                <Text style={styles.inputText}>{formatDate(startDate)}</Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={openStart}
                date={startDate}
                mode="date"
                onConfirm={data => {
                  setOpenStart(false);
                  console.log('data', data);
                  setStartDate(data);
                }}
                onCancel={() => {
                  setOpenStart(false);
                }}
              />
            </View>
            <View style={[g_styles.w_p50, g_styles.pl_10]}>
              <Text style={styles.label}>End Date</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setOpenEnd(true)}>
                <Image source={calendar} />
                <Text style={styles.inputText}>{formatDate(endDate)}</Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={openEnd}
                date={endDate}
                mode="date"
                onConfirm={data => {
                  if (new Date(data) >= new Date(startDate)) {
                    setOpenEnd(false);
                    setEndDate(data);
                  }
                }}
                onCancel={() => {
                  setOpenEnd(false);
                }}
              />
            </View>
          </View>
          <View style={[g_styles.w_p50, g_styles.pr_10]}>
            <Text style={styles.label}>Deadline Hour</Text>
            <TouchableOpacity
              style={styles.inputBox}
              onPress={() => setOpenDeadline(true)}>
              <Image source={timeImg} />
              <Text style={styles.inputText}>
                {deadline.getHours() + ':' + deadline.getMinutes()}
              </Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={openDeadline}
              date={deadline}
              mode="time"
              onConfirm={data => {
                setOpenDeadline(false);
                setDeadline(data);
              }}
              onCancel={() => {
                setOpenDeadline(false);
              }}
            />
          </View>
          <View style={styles.calendarView}>
            <Calendar
              markingType={'custom'}
              markedDates={markedDates}
              theme={{
                arrowColor: color33,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <MainActionButton text={'Request Change'} bgColor={color46} />
    </SafeAreaView>
  );
};

export default EditDueDiligenceDate;

const styles = StyleSheet.create({
  title: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  label: {
    color: gray1,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    borderColor: color20,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 5,
  },
  inputText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    padding: 10,
    color: black1,
  },
  calendarView: {
    marginTop: 30,
    borderColor: color20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
