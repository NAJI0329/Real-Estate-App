import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  color30,
  color34,
  color35,
  color39,
  color48,
} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';
import BottomAddBtn from '../../BottomAddBtn';
import TaskItem from './TaskItem';

const taskIcon = require('./../../../../assets/images/confirm.png');

const MyTasks = () => {
  const [types] = useState(['In Progress', 'Up Coming', 'Completed']);
  const [selectedType, setSelectedType] = useState(types[0]);

  const tasks = [
    {
      icon: taskIcon,
      title: 'Profile created for each party',
      date: '19/01/23',
    },
    {
      icon: taskIcon,
      title: 'Executed Contract',
      date: '19/01/23',
    },
  ];

  return (
    <View style={g_styles.mt_20}>
      <View style={styles.type}>
        {types.map((row, key) => {
          return (
            <Text
              key={key}
              onPress={() => {
                setSelectedType(row);
              }}
              style={[
                styles.typeText,
                selectedType === row && styles.activeTypeText,
              ]}>
              {row}
            </Text>
          );
        })}
      </View>
      <Text style={styles.title}>Opended Tasks:</Text>
      <View style={g_styles.mt_10}>
        {tasks.map((row, key) => {
          return <TaskItem key={key} row={row} />;
        })}
      </View>
    </View>
  );
};

export default MyTasks;

const styles = StyleSheet.create({
  type: {
    flexDirection: 'row',
    // justifyContent: 'start',
    alignItems: 'center',
  },
  typeText: {
    color: color30,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Source Sans Pro',
    paddingRight: 32,
  },
  activeTypeText: {
    color: color35,
  },
  title: {
    marginTop: 24,
    color: color39,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'SF Pro Display',
  },
});
