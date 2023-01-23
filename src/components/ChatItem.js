import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  black1,
  color40,
  color38,
  primaryMain,
  white,
  gray1,
} from '../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import g_styles from '../ui/common/styles';

const avatar1 = require('./../../assets/images/users/avatar1.png');
const avatar2 = require('./../../assets/images/users/avatar2.png');
const avatar3 = require('./../../assets/images/users/avatar3.png');
const avatar4 = require('./../../assets/images/users/avatar4.png');
const avatar5 = require('./../../assets/images/users/avatar5.png');

const ChatItem = ({row}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatBox')}>
      <View style={styles.itemBox}>
        <View style={styles.leftView}>
          <View style={styles.iconView}>
            <Image source={row?.icon} style={styles.icon} />
            <View style={styles.countView}>
              <Text style={styles.countText}>{row?.count}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sessionName}>{row?.title}</Text>
            <Text style={styles.description}>{row?.description}</Text>
            <Text style={styles.addressTitle}>Address</Text>
            <Text style={styles.addressText}>
              1276 County Rd #4206 Knox City, Texas(TX), 79529
            </Text>
            <View style={styles.usersView}>
              <Image source={avatar1} style={styles.avatar} />
              <Image source={avatar2} style={styles.avatar} />
              <Image source={avatar3} style={styles.avatar} />
              <Image source={avatar4} style={styles.avatar} />
              <Image source={avatar5} style={styles.avatar} />
            </View>
          </View>
        </View>
        <View style={g_styles.h_full}>
          <Text style={styles.dateText}>{row?.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 1,
    backgroundColor: white,
    borderRadius: 8,
    marginBottom: 20,
  },
  leftView: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  iconView: {
    marginRight: 20,
    marginTop: 10,
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: 100,
  },
  countView: {
    position: 'absolute',
    right: -3,
    top: -3,
    borderColor: white,
    borderWidth: 1,
    backgroundColor: color40,
    height: 16,
    width: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  countText: {
    color: white,
    fontSize: 12,
    lineHeight: 14,
  },
  sessionName: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  description: {
    color: black1,
    fontSize: 14,
    fontWeight: '400',
  },
  addressTitle: {
    color: color38,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },

  addressText: {
    color: gray1,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    maxWidth: 200,
  },
  usersView: {
    flexDirection: 'row',
    marginTop: 10,
    lineHeight: 20,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginRight: -8,
  },
  dateText: {
    color: color38,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
});
