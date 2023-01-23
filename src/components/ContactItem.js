import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {
  color18,
  color37,
  grayBlack,
  primaryMain,
  white,
} from '../ui/common/colors';
import {Shadow} from 'react-native-shadow-2';
import g_styles from '../ui/common/styles';

const avatar = require('../../assets/images/avatar.png');
const link = require('../../assets/images/link.png');

const ContactItem = ({row}) => {
  return (
    <Shadow distance={4} offset={[1, 2]} style={styles.itemBox}>
      <Image source={row?.avatar ? row.avatar : avatar} style={styles.avatar} />
      <View>
        <Text style={styles.type}>{row.type}</Text>
        <Text style={styles.name}>{row.name}</Text>
        <Text style={styles.email}>{row.email}</Text>
        <Text style={styles.text}>{row.phone}</Text>
        <Text style={styles.text}>{row.address}</Text>
        <Text style={styles.text}>{row.city}</Text>
      </View>
      <Image source={link} style={styles.link} />
      <Text style={styles.code}>{row.code}</Text>
    </Shadow>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: white,
    width: '100%',
  },
  avatar: {
    borderRadius: 100,
    height: 48,
    width: 48,
    marginRight: 20,
    marginTop: 5,
  },
  link: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  code: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    color: color18,
    fontWeight: '700',
    fontSize: 14,
  },
  type: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 0,
  },
  name: {
    color: grayBlack,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    lineHeight: 24,
  },
  email: {
    color: color18,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
  text: {
    color: color18,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
  },
});
