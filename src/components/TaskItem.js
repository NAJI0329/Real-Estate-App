import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryMain, white, black1, color38, gray1} from '../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import g_styles from '../ui/common/styles';

const TaskItem = ({row}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{backgroundColor: white}}
      onPress={() => navigation.navigate('Tasks')}>
      <View style={styles.itemBox}>
        <View style={styles.taskView}>
          <Image source={row?.icon} style={styles.avatar} />
          <View>
            <Text style={styles.taskName}>Send Legal Document</Text>
            <Text style={styles.status}>{row?.status}</Text>
            <Text style={styles.addressTitle}>Address</Text>
            <Text style={styles.addressText}>
              1276 County Rd #4206 Knox City, Texas(TX), 79529
            </Text>
          </View>
        </View>
        <View style={g_styles.h_full}>
          <Text style={styles.dateText}>{row?.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 1,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: white,
  },
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 20,
  },
  taskName: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SF Pro Display',
  },
  status: {
    color: black1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'SF Pro Display',
  },
  addressTitle: {
    color: color38,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  addressText: {
    color: gray1,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    maxWidth: 200,
  },
  dateText: {
    color: color38,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
  },
});
