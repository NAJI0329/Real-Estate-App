import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryMain, white} from '../ui/common/colors';

const AddIcon = require('../../assets/images/add.png');

const BottomFileAddBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      <Image source={AddIcon} />
    </TouchableOpacity>
  );
};

export default BottomFileAddBtn;

const styles = StyleSheet.create({
  view: {
    backgroundColor: primaryMain,
    height: 56,
    width: 56,
    position: 'absolute',
    borderRadius: 100,
    bottom: 130,
    right: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 25,
  },
});
