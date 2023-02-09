import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import GeneralChatItem from '../../components/chat/GeneralChatItem';
import SearchInput from '../../components/SearchInput';
import GeneralTaskItem from '../../components/task/GeneralTaskItem';
import TaskRoomBottomMenu from '../../components/TaskRoomBottomMenu';
import TopTitle from '../../components/TopTitle';
import g_styles from '../../ui/common/styles';

const ChatIcon1 = require('./../../../assets/images/chat/1.png');
const ChatIcon2 = require('./../../../assets/images/chat/2.png');
const ChatIcon3 = require('./../../../assets/images/chat/3.png');

const UserIcon1 = require('./../../../assets/images/users/avatar1.png');
const UserIcon2 = require('./../../../assets/images/users/avatar2.png');
const UserIcon3 = require('./../../../assets/images/users/avatar3.png');

const UnsplashImg1 = require('./../../../assets/images/unsplash/unsplash1.png');
const UnsplashImg2 = require('./../../../assets/images/unsplash/unsplash2.png');
const UnsplashImg3 = require('./../../../assets/images/unsplash/unsplash3.png');

const GeneralTaskList = () => {
  const items = [
    {
      title: 'New Transaction Order',
      description: 'Waiting for review',
      date: '12:00PM',
      unsplash: UnsplashImg1,
    },
    {
      title: 'Change Requested',
      description: 'Waiting for review',
      date: 'Yesterday',
      unsplash: UnsplashImg2,
    },
    {
      icon: ChatIcon3,
      title: 'Sign Contract',
      description: 'Waiting for review',
      date: 'Friday',
      unsplash: UnsplashImg3,
    },
  ];

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'General Task List'}
        prevPath={'TransactionRoom'}
        isClose={false}
      />
      <View style={g_styles.box}>
        <SearchInput placeholder={'Search tasks by address'} />
      </View>
      <ScrollView style={[g_styles.box, g_styles.py_16]}>
        {items.map((row, key) => {
          return <GeneralTaskItem row={row} key={key} />;
        })}
      </ScrollView>
      <TaskRoomBottomMenu />
    </SafeAreaView>
  );
};

export default GeneralTaskList;

const styles = StyleSheet.create({});
