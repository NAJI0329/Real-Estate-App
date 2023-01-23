import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {secondaryMain, color38, color35, color29} from '../../ui/common/colors';

const RoleItem = ({row, setSelectedRole, selectedRole}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedRole(row);
      }}>
      <View style={[styles.itemBox, selectedRole === row && styles.selected]}>
        <Text style={styles.text}>{row}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoleItem;

const styles = StyleSheet.create({
  itemBox: {
    borderRadius: 20,
    borderColor: secondaryMain,
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 23,
  },
  selected: {
    borderColor: color35,
    backgroundColor: color29,
  },
  text: {
    color: color38,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
