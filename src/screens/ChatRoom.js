import React, {useState} from 'react';

import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {color13, color34, color48} from '../ui/common/colors';

import UnlockifyNav from '../components/UnlocakifyNav';
import BottomAddBtn from '../components/BottomAddBtn';
import TaskRoomBottomMenu from '../components/TaskRoomBottomMenu';
import g_styles from '../ui/common/styles';
import TransactionItem from '../components/chatroom/TransactionItem';
import Status from '../components/chatroom/Status';
import MyTasks from '../components/chatroom/myTasks/MyTasks';
import MyMessages from '../components/chatroom/myTasks/MyMessages';
import MyFIles from '../components/chatroom/myTasks/MyFiles';

const notiImg = require('./../../assets/images/nit.png');

const ChatRoom = () => {
  const [tabs] = useState(['My Tasks', 'My Messages', 'My Files']);
  const [selectTab, setSelectedTab] = useState(tabs[0]);

  return (
    <View style={g_styles.container}>
      <UnlockifyNav title="Simple Deeds" />
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
          {/* Status */}
          <Status />
          {/* View */}
          <View style={g_styles.mt_24}>
            <View style={styles.tab}>
              {tabs.map((row, key) => {
                return (
                  <>
                    {key !== 0 && (
                      <Text key={key} style={styles.tabRightBorder}>
                        |
                      </Text>
                    )}
                    <Text
                      style={[
                        styles.tabText,
                        selectTab === row && styles.activeTabText,
                      ]}
                      onPress={() => {
                        setSelectedTab(row);
                      }}>
                      {row}
                    </Text>
                  </>
                );
              })}
            </View>
            {selectTab === tabs[0] && <MyTasks />}
            {selectTab === tabs[1] && <MyMessages />}
            {selectTab === tabs[2] && <MyFIles />}
          </View>
        </View>
      </ScrollView>
      {selectTab === tabs[0] && <BottomAddBtn clickPath={'AddContact'} />}
      <TaskRoomBottomMenu />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  titleText: {
    color: color48,
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabText: {
    color: color34,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Source Sans Pro',
    marginRight: 32,
  },
  tabRightBorder: {
    color: color13,
    fontSize: 20,
    marginRight: 32,
  },
  activeTabText: {
    color: color48,
  },
});
