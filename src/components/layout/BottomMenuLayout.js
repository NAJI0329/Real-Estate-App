import React from 'react';
import {View, StyleSheet} from 'react-native';
import {color17} from '../../ui/common/colors';
import {deviceWidth} from '../../ui/common/responsive';

const BottomMenuLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>{children}</View>
    </View>
  );
};

export default BottomMenuLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color17,
    width: deviceWidth,
  },
  box: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
