import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {
  black1,
  color32,
  color33,
  color39,
  gray1,
  white,
} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const CalendarIcon = require('../../../assets/images/calendar.png');
const TimeIcon = require('../../../assets/images/time.png');
const LinkIcon = require('../../../assets/images/link.png');

const UserAvatar = require('../../../assets/images/users/buyer.png');
const MessageIcon = require('./../../../assets/images/selected_chat.png');
const AssignedUserItem = () => {
  return (
    <View style={g_styles.my_5}>
      <Shadow distance={2} offset={[0, 2]} style={styles.infoView}>
        <Image source={UserAvatar} style={g_styles.mr_20} />
        <View>
          <Text style={styles.role}>Title Agent</Text>
          <Text style={styles.name}>Ari Setiawan</Text>
          <Text style={styles.email}>rico@nutechadvisors.com</Text>
        </View>
        <Image source={MessageIcon} style={styles.msgIcon} />
      </Shadow>
    </View>
  );
};

export default AssignedUserItem;

const styles = StyleSheet.create({
  infoView: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: white,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  role: {
    color: color39,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
  },
  name: {
    color: color33,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  email: {
    color: color32,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
  },
  msgIcon: {
    position: 'absolute',
    right: 30,
  },
});
