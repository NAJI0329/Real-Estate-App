import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import SearchInput from '../../components/SearchInput';
import TransactionRoomBottomMenu from '../../components/Transaction/TransactionRoomBottomMenu';
import TaskItem from '../../components/TaskItem';
import g_styles from '../../ui/common/styles';

const taskIcon = require('./../../../assets/images/taskIcon.png');

const TaskList = () => {
  const tasks = [
    {
      icon: taskIcon,
      date: '12:00PM',
      title: 'New Transaction Order',
      status: 'Waiting for review',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
    },
    {
      icon: taskIcon,
      date: '03:00PM',
      title: 'Change Requested',
      status: 'Waiting for review',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
    },
    {
      icon: taskIcon,
      date: 'Yesterday',
      title: 'Sign Contract',
      status: 'Waiting for review',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
    },
    {
      icon: taskIcon,
      date: 'Friday',
      title: 'New Transaction Order',
      status: 'Waiting for review',
      address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
    },
  ];

  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'General Task List'}
        prevPath={'TransactionRoom'}
        isClose={false}
      />
      <ScrollView>
        <View style={g_styles.box}>
          <SearchInput placeholder={'Search Chats'} />
          <View style={g_styles.mt_10}>
            {tasks.map((row, key) => {
              return <TaskItem key={key} row={row} />;
            })}
          </View>
        </View>
      </ScrollView>
      <TransactionRoomBottomMenu />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
