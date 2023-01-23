import React from 'react';

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white, color48} from '../../ui/common/colors';

import TaskRoomBottomMenu from '../../components/TaskRoomBottomMenu';
import ChatInput from '../../components/chat/ChatInput';
import MsgItem from '../../components/chat/MsgItem';
import g_styles from '../../ui/common/styles';
import TransactionItem from '../../components/chatroom/TransactionItem';

const notiImg = require('./../../../assets/images/nit.png');
const user1 = require('../../../assets/images/users/1.png');
const user2 = require('../../../assets/images/users/2.png');

const ChatBox = () => {
  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'Individual Chat'}
        prevPath={'TransactionRoom'}
        closePath="SignIn"
      />
      <ScrollView>
        <View style={g_styles.box}>
          {/* Transaction */}
          <View>
            <View style={[g_styles.flex, g_styles.itemsCenter]}>
              <Text style={styles.titleText}>Transaction</Text>
              <Image source={notiImg} />
            </View>
            <View style={g_styles.mt_16}>
              <TransactionItem
                row={{
                  address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
                }}
                showStatusIcon={false}
              />
            </View>
          </View>
          <View>
            <Text style={styles.titleText}>Members</Text>
            <View style={[g_styles.mt_10, g_styles.flex]}>
              <Image source={user1} style={styles.memberImg} />
              <Image source={user2} style={styles.memberImg} />
            </View>
          </View>
          <View style={g_styles.mt_16}>
            <Text style={styles.titleText}>Chat</Text>
            <View style={g_styles.mt_20}>
              <MsgItem type="out" />
              <MsgItem type="in" />
            </View>
          </View>
        </View>
      </ScrollView>
      <ChatInput />
      <TaskRoomBottomMenu />
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  titleText: {
    color: color48,
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
    fontFamily: 'Source Sans Pro',
  },
  memberImg: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 16,
  },
});
