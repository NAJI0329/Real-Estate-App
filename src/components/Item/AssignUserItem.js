import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color39, color33, color32, white} from '../../ui/common/colors';
import {Shadow} from 'react-native-shadow-2';
import g_styles from '../../ui/common/styles';

const UnSelectedCheckBox = require('./../../../assets/images/unselected-checkbox.png');
const SelectedCheckBox = require('./../../../assets/images/selected-checkbox.png');

const AssignUserItem = ({row, setSelectedUsers, selectedUsers}) => {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      padding: 20,
      width: '100%',
      position: 'relative',
      backgroundColor: white,
      opacity: selectedUsers.includes(row?.id) ? 1 : 0.7,
    },
    avatar: {
      height: 48,
      width: 48,
      borderRadius: 100,
      marginRight: 20,
    },
    role: {
      color: color39,
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'SF Pro Display',
    },
    name: {
      color: color33,
      fontSize: 20,
      lineHeight: 32,
      fontFamily: 'Inter',
      fontWeight: '600',
    },
    email: {
      color: color32,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'SF Pro Display',
      fontWeight: '400',
    },
    checkView: {
      position: 'absolute',
      right: 20,
    },
  });

  return (
    <TouchableOpacity
      style={g_styles.my_10}
      onPress={() => {
        if (!selectedUsers.includes(row?.id)) {
          selectedUsers.push(row?.id);
          setSelectedUsers(selectedUsers);
        } else {
          selectedUsers.splice(selectedUsers.indexOf(row?.id), 1);
          setSelectedUsers(selectedUsers);
        }
      }}>
      <Shadow
        distance={3}
        offset={[0, 3]}
        startColor={'#00000010'}
        style={styles.view}>
        <Image source={row.avatar} style={styles.avatar} />
        <View style={styles.textView}>
          <Text style={styles.role}>{row.role}</Text>
          <Text style={styles.name}>{row.name}</Text>
          <Text style={styles.email}>{row.email}</Text>
        </View>
        <View style={styles.checkView}>
          <Image
            source={
              selectedUsers.includes(row?.id)
                ? SelectedCheckBox
                : UnSelectedCheckBox
            }
          />
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default AssignUserItem;
