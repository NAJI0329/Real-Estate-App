import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {color39, color18, grayBlack, color50} from '../../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import g_styles from '../../../ui/common/styles';
import {Shadow} from 'react-native-shadow-2';

const rightArrowImg = require('./../../../../assets/images/rightArrow.png');

const TaskItem = ({row}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={g_styles.my_10}
      onPress={() => navigation.navigate('Tasks')}>
      <Shadow style={styles.itemBox} distance={2} offset={[0, 2]}>
        <View style={styles.taskView}>
          <Image source={row?.icon} style={styles.avatar} />
          <View>
            <Text style={styles.taskName}>{row?.title}</Text>
            <Text style={styles.dateH}>Due Date</Text>
            <Text style={styles.dateT}>{row.date}</Text>
          </View>
        </View>
        <Image source={rightArrowImg} style={styles.rightArrow} />
      </Shadow>
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
    padding: 16,
    borderRadius: 8,
    backgroundColor: color50,
    width: '100%',
  },
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 24,
  },
  taskName: {
    color: color39,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SF Pro Display',
  },
  dateH: {
    color: color18,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  dateT: {
    color: grayBlack,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  rightArrow: {
    position: 'absolute',
    right: 24,
  },
});
