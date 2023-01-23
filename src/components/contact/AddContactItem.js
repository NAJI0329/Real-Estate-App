import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryMain, white} from '../../ui/common/colors';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

const avatar = require('../../../assets/images/avatar.png');

const AddContactItem = () => {
  const navigation = useNavigation();

  return (
    <Shadow distance={1} offset={[0, 1]} style={[styles.itemBox]}>
      <Image source={avatar} style={styles.avatar} />
      <View>
        <Text style={styles.type}>Add Seller’s Agent</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddContact')}
        style={styles.addButtonView}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </Shadow>
  );
};

export default AddContactItem;

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: white,
    width: '100%',
  },
  avatar: {
    borderRadius: 100,
    height: 48,
    width: 48,
    marginRight: 20,
    marginTop: 5,
  },
  addButtonView: {
    position: 'absolute',
    right: 20,
    height: 40,
    width: 40,
    backgroundColor: primaryMain,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: white,
    fontSize: 20,
  },
  type: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
  },
});
