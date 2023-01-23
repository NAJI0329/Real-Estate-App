import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryMain, color30, color35} from '../../ui/common/colors';

const SelectType = ({types, type, setType}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>My Transactions</Text>
      <View style={styles.textView}>
        {types.map((row, key) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setType(row);
              }}
              key={key}>
              <Text
                style={[
                  styles.text,
                  type === row && styles.selectType,
                  key !== 0 && {borderLeftWidth: 1, borderColor: '#00000015'},
                ]}>
                {row}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SelectType;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    // borderBottomColor: '#00000015',
    // borderBottomWidth: 1,
    marginTop: 20,
  },
  title: {
    color: primaryMain,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  text: {
    color: color30,
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  selectType: {
    color: color35,
  },
});
