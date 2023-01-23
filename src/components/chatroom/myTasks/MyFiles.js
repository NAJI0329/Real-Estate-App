import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {color30, color35, color39} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';
import FileItem from './FileItem';
import MessageItem from './MessageItem';

const icon1 = require('../../../../assets/images/users/1.png');
const icon2 = require('../../../../assets/images/users/2.png');
const icon3 = require('../../../../assets/images/users/3.png');
const icon4 = require('../../../../assets/images/users/4.png');

const MyFIles = () => {
  const [types] = useState(['Uploaded']);
  const [selectedType, setSelectedType] = useState(types[0]);

  const chats = [
    {
      icon: icon1,
      title: 'Title + Seller',
      description: 'I just sent the files, let me know...',
      date: '12:00PM',
      count: 4,
    },
    {
      icon: icon1,
      title: 'Title + Seller',
      description: 'I just sent the files, let me know...',
      date: '12:00PM',
      count: 4,
    },
  ];

  return (
    <View style={g_styles.mt_20}>
      <View style={styles.type}>
        {types.map((row, key) => {
          return (
            <Text
              key={key}
              onPress={() => {
                setSelectedType(row);
              }}
              style={[
                styles.typeText,
                selectedType === row && styles.activeTypeText,
              ]}>
              {row}
            </Text>
          );
        })}
      </View>
      <View style={g_styles.my_10}>
        {chats.map((row, key) => {
          return <FileItem key={key} row={row} />;
        })}
      </View>
    </View>
  );
};

export default MyFIles;

const styles = StyleSheet.create({
  type: {
    flexDirection: 'row',
    // justifyContent: 'start',
    alignItems: 'center',
  },
  typeText: {
    color: color30,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Source Sans Pro',
    paddingRight: 32,
  },
  activeTypeText: {
    color: color35,
  },
  title: {
    marginTop: 24,
    color: color39,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'SF Pro Display',
  },
});
