import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {color29, primaryMain, white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import FileItem from '../../components/chat/FileItem';
import ShareFileUserItem from '../../components/file/ShareFileUserItem';
import MainActionButton from '../../components/MainActionButton';
import g_styles from '../../ui/common/styles';

const documentImg = require('./../../../assets/images/item4.png');
const User1Img = require('../../../assets/images/users/buyer_agent.png');
const User2Img = require('../../../assets/images/users/buyer.png');
const User3Img = require('../../../assets/images/users/loan_officer.png');
const User4Img = require('../../../assets/images/users/seller.png');
const User5Img = require('../../../assets/images/users/seller_agent.png');

const ShareFile = ({navigation}) => {
  const [users] = useState([
    {
      id: '1',
      avatar: User1Img,
      role: 'Seller’s Agent',
      name: 'Ari Setiawan',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '2',
      avatar: User2Img,
      role: 'Buyer',
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '3',
      avatar: User3Img,
      role: 'Seller',
      name: 'Daniel Fernandez',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '4',
      avatar: User4Img,
      role: 'Buyer’s Agent',
      name: 'Daniel Fernandez',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '5',
      avatar: User5Img,
      role: 'Loan Officer',
      name: 'Daniel Fernandez',
      email: 'rico@nutechadvisors.com',
    },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'Share'} prevPath={'ChatBox'} closePath="SignIn" />
      <View style={styles.searchView}>
        <Image source={documentImg} />
        <Text style={styles.searchText}>Search the file with</Text>
      </View>
      <ScrollView>
        <View style={g_styles.box}>
          {users.map((row, key) => {
            return (
              <ShareFileUserItem
                row={row}
                key={key}
                selectedUsers={selectedUsers}
                setSelectedUsers={setSelectedUsers}
              />
            );
          })}
        </View>
      </ScrollView>
      <MainActionButton
        text="Share File"
        onPress={() => navigation.navigate('ChatBox')}
      />
    </SafeAreaView>
  );
};

export default ShareFile;

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: color29,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  searchText: {
    color: primaryMain,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    paddingLeft: 10,
  },
});
