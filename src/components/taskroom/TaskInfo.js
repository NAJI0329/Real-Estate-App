import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {black1, color39, gray1, white} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const CalendarIcon = require('../../../assets/images/calendar.png');
const TimeIcon = require('../../../assets/images/time.png');
const LinkIcon = require('../../../assets/images/link.png');

const TaskInfo = () => {
  return (
    <View style={g_styles.my_5}>
      <Shadow distance={2} offset={[0, 2]} style={styles.infoView}>
        <Image source={LinkIcon} style={styles.link} />
        <Text style={styles.label}>Task</Text>
        <Text style={styles.text}>Upload copy of survey</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.text}>
          Please upload your copy of survey so we can continue with the process.
        </Text>
        <Text style={styles.label}>Deadline</Text>
        <View style={[g_styles.flex]}>
          <View style={g_styles.w_half}>
            <Text style={styles.subLabel}>End Date</Text>
            <View style={[g_styles.flex, g_styles.itemsCenter, g_styles.mt_5]}>
              <Image source={CalendarIcon} style={g_styles.mx_10} />
              <Text style={styles.subText}>27/01/23</Text>
            </View>
          </View>
          <View style={g_styles.w_half}>
            <Text style={styles.subLabel}>Deadline Hour</Text>
            <View style={[g_styles.flex, g_styles.itemsCenter, g_styles.mt_5]}>
              <Image source={TimeIcon} style={g_styles.mx_10} />
              <Text style={styles.subText}>5:00 p.m.</Text>
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default TaskInfo;

const styles = StyleSheet.create({
  infoView: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: white,
    padding: 20,
  },
  link: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  label: {
    color: color39,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
    marginBottom: 10,
  },
  text: {
    color: black1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    marginLeft: 14,
    marginBottom: 10,
  },
  subLabel: {
    color: gray1,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
    marginBottom: 10,
  },
  subText: {
    color: black1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
});
