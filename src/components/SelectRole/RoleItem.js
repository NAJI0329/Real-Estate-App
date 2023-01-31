import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

import {
  secondaryMain,
  color38,
  color35,
  color29,
  white,
} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const RoleItem = ({row, setSelectedRole, selectedRole}) => {
  return (
    <TouchableOpacity
      style={g_styles.my_10}
      onPress={() => {
        setSelectedRole(row);
      }}>
      <Shadow
        distance={2}
        offset={[0, 1]}
        startColor={'#00000010'}
        style={[styles.itemBox, selectedRole === row && styles.selected]}>
        <View>
          <Text style={styles.text}>{row}</Text>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default RoleItem;

const styles = StyleSheet.create({
  itemBox: {
    borderRadius: 20,
    borderColor: secondaryMain,
    borderWidth: 1,
    paddingVertical: 23,
    width: '100%',
    backgroundColor: white,
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
