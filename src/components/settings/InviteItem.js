import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {primaryMain, white, color33, color32} from '../../ui/common/colors';

const InviteItem = ({row, invitedList, setInvitedList}) => {
  return (
    <View style={styles.itemView}>
      <View style={styles.leftView}>
        <Image source={row?.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{row?.name}</Text>
          <Text style={styles.itemText}>{row?.email}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={
          invitedList.includes(row?.id)
            ? styles.invitedButton
            : styles.inviteButton
        }
        onPress={() => {
          if (!invitedList.includes(row?.id)) {
            console.log('add');
            invitedList.push(row?.id);
            setInvitedList(invitedList);
          } else {
            console.log('delete');
            invitedList.splice(invitedList.indexOf(row?.id), 1);
            setInvitedList(invitedList);
          }
          console.log(invitedList);
        }}>
        <Text
          style={
            invitedList.includes(row?.id)
              ? styles.invitedText
              : styles.inviteText
          }>
          {invitedList.includes(row?.id) ? 'Invited' : 'Invite'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteItem;

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Platform.OS === 'ios' ? 16 : 20,
    elevation: 1,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: white,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    marginRight: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: color33,
  },
  itemText: {
    color: color32,
    fontSize: 14,
    fontWeight: '400',
  },
  invitedButton: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: primaryMain,
    backgroundColor: primaryMain,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  inviteButton: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: primaryMain,
    paddingVertical: 8,
    paddingHorizontal: 23,
  },
  inviteText: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '500',
  },
  invitedText: {
    color: white,
    fontSize: 14,
    fontWeight: '500',
  },
});
