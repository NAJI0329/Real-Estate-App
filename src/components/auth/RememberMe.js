import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {primaryMain, softBlack, softGray} from '../../ui/common/colors';

const RememberMe = () => {
  const [isRemember, setRemember] = useState(false);

  return (
    <View style={styles.rememberView}>
      <CheckBox
        tintColors={{true: primaryMain, false: softBlack}}
        style={styles.rememberCheckBox}
        disabled={false}
        boxType={'square'}
        value={isRemember}
        onValueChange={newValue => setRemember(newValue)}
      />
      <Text
        style={styles.rememberText}
        onPress={() => setRemember(!isRemember)}>
        Remember me
      </Text>
    </View>
  );
};

export default RememberMe;

const styles = StyleSheet.create({
  rememberView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  rememberCheckBox: {
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
    marginRight: 20,
    height: 16,
    width: 16,
    borderRadius: 4,
  },
  rememberText: {
    color: softGray,
    fontSize: 14,
    fontWeight: '500',
  },
});
