import {StyleSheet} from 'react-native';
import {white} from './colors';
import {deviceHeight, deviceWidth} from './responsive';

const g_styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: white,
  },
  box: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  flex: {flexDirection: 'row'},
  itemsCenter: {alignItems: 'center'},
  itemsStart: {alignItems: 'flex-start'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyCenter: {justifyContent: 'center'},
  py_24: {paddingVertical: 24},
  mt_5: {marginTop: 5},
  mt_10: {marginTop: 10},
  mt_16: {marginTop: 16},
  mt_20: {marginTop: 20},
  mt_24: {marginTop: 24},
  mt_30: {marginTop: 30},
  mt_32: {marginTop: 32},
  mt_50: {marginTop: 50},
  mt_70: {marginTop: 70},
  my_5: {marginVertical: 5},
  my_10: {marginVertical: 10},
  mx_10: {marginHorizontal: 10},
  ml_5: {marginLeft: 5},
  ml_10: {marginLeft: 10},
  ml_15: {marginLeft: 15},
  ml_20: {marginLeft: 20},
  mr_5: {marginRight: 5},
  mr_8: {marginRight: 8},
  mr_10: {marginRight: 10},
  mr_20: {marginRight: 20},
  h_half: {height: '50%'},
  h_full: {height: '100%'},
  w_half: {width: '50%'},
  w_full: {width: '100%'},
});

export default g_styles;
