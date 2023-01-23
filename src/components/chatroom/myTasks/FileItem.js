import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {
  black1,
  color25,
  primaryMain,
  secondaryMain,
  white,
} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const fileItemImg = require('./../../../../assets/images/fileItem.png');

const FileItem = () => {
  return (
    <View style={g_styles.my_5}>
      <Shadow
        distance={4}
        offset={[0, 3]}
        startColor={'#00000010'}
        endColor={'#00000000'}
        style={styles.itemBox}>
        <View style={styles.iconView}>
          <Image source={fileItemImg} />
        </View>
        <View>
          <Text style={styles.name}>Contract_4234.pdf</Text>
          <Text style={styles.type}>Uploaded Date</Text>
          <Text style={styles.date}>Jan-19-2023, Thursday</Text>
        </View>
      </Shadow>
    </View>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    borderRadius: 8,
    backgroundColor: white,
    width: '100%',
  },
  iconView: {
    backgroundColor: secondaryMain,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    marginRight: 24,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 100,
    marginRight: 15,
  },
  name: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'SF Pro Display',
  },
  type: {
    color: black1,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
  email: {
    color: color25,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    lineHeight: 20,
  },
});
