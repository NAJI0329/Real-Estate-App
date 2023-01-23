import React, {useState} from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {white} from '../../ui/common/colors';

import HelpItem from '../../components/settings/HelpItem';
import g_styles from '../../ui/common/styles';
import InviteItem from '../../components/settings/InviteItem';
import BottomAddBtn from '../../components/BottomAddBtn';

const userImg = require('./../../../assets/images/user.png');

const InviteTransactionCoordinator = () => {
  const invites = [
    {
      id: 1,
      avatar: userImg,
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
      invited: false,
    },
    {
      id: 2,
      avatar: userImg,
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
      invited: false,
    },
    {
      id: 3,
      avatar: userImg,
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
      invited: false,
    },
    {
      id: 4,
      avatar: userImg,
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
      invited: false,
    },
  ];

  const [invitedList, setInvitedList] = useState([]);

  return (
    <View style={g_styles.container}>
      <TopTitle title={'Invite'} prevPath={'Settings'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          {invites.map((row, key) => {
            return (
              <InviteItem
                key={key}
                row={row}
                invitedList={invitedList}
                setInvitedList={setInvitedList}
              />
            );
          })}
        </View>
      </ScrollView>
      <BottomAddBtn clickPath={'AddCoordinator'} />
    </View>
  );
};

export default InviteTransactionCoordinator;

const styles = StyleSheet.create({});
