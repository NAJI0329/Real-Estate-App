import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../components/TopTitle';
import SearchInput from '../components/SearchInput';
import TransactionRoomBottomMenu from '../components/Transaction/TransactionRoomBottomMenu';
import ChatItem from '../components/ChatItem';
import g_styles from '../ui/common/styles';
import ChatRoom from './ChatRoom';

const icon1 = require('./../../assets/images/chat/1.png');
const icon2 = require('./../../assets/images/chat/2.png');
const icon3 = require('./../../assets/images/chat/3.png');
const icon4 = require('./../../assets/images/chat/4.png');

const SessionChats = () => {
  const chats = [
    {
      icon: icon1,
      title: 'Title + Buyer + BA + LO',
      description: 'I just sent the files, let me know...',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
      date: '12:00PM',
      count: 4,
    },
    {
      icon: icon2,
      title: 'Title + BA + LO',
      description: 'I just sent the files, let me know...',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
      date: 'Yesterday',
      count: 1,
    },
    {
      icon: icon3,
      title: 'Title + Buyer + BA + LO',
      description: 'I just sent the files, let me know...',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
      date: 'Friday',
      count: 2,
    },
    {
      icon: icon4,
      title: 'Title + Buyer + BA + LO',
      description: 'I just sent the files, let me know...',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
      date: 'Friday',
      count: 1,
    },
  ];

  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'General Chat Sessions'}
        prevPath={'TransactionRoom'}
        isClose={false}
      />
      <ScrollView>
        <View style={g_styles.box}>
          <SearchInput placeholder={'Search chats by address'} />
          <View style={g_styles.mt_20}>
            {chats.map((row, key) => {
              return <ChatItem key={key} row={row} />;
            })}
          </View>
        </View>
      </ScrollView>
      <TransactionRoomBottomMenu />
    </View>
  );
};

export default SessionChats;

const styles = StyleSheet.create({});
