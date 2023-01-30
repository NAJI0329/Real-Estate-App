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

const GeneralChat = () => {
  const items = [
    {
      icon: ChatIcon1,
      title: 'Title + Buyer + BA + LO',
      description: 'I just sent the files, let me know...',
      date: '12:00PM',
      count: 1,
      users: [UserIcon1, UserIcon2],
      unsplash: UnsplashImg1,
    },
    {
      icon: ChatIcon2,
      title: 'Title + BA + LO',
      description: 'I just sent the files, let me know...',
      date: 'Yesterday',
      count: 4,
      users: [UserIcon1, UserIcon2, UserIcon3],
      unsplash: UnsplashImg2,
    },
    {
      icon: ChatIcon3,
      title: 'Title + Buyer',
      description: 'I just sent the files, let me know...',
      date: 'Friday',
      count: 2,
      users: [],
      unsplash: UnsplashImg3,
    },
  ];

  return (
    <SafeAreaView>
      <View style={g_styles.container}>
        <TopTitle
          title={'General Task List'}
          prevPath={'TransactionRoom'}
          isClose={false}
        />
        <View style={g_styles.box}>
          <SearchInput placeholder={'Search chats by address'} />
        </View>
        <ScrollView style={g_styles.box}>
          <FlatList
            data={items}
            renderItem={({item}) => <GeneralChatItem row={item} />}
          />
        </ScrollView>
        <TaskRoomBottomMenu />
      </View>
    </SafeAreaView>
  );
};

export default GeneralChat;

const styles = StyleSheet.create({});
