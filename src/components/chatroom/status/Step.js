import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {
  color18,
  color20,
  color26,
  color46,
  color51,
  color52,
  white,
} from '../../../ui/common/colors';

const AcitveImg = require('./../../../../assets/images/active.png');

const Step = ({activeStep, step, row, stepCount}) => {
  const styles = StyleSheet.create({
    step: {
      alignItems: 'center',
    },
    view: {
      backgroundColor: activeStep > step ? color26 : white,
      height: 33,
      width: 33,
      borderRadius: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:
        activeStep === step ? color46 : activeStep > step ? color26 : color20,
      borderWidth: 1.5,
      zIndex: 2,
    },
    activeIcon: {
      height: 11,
      width: 11,
      borderRadius: 100,
      backgroundColor: color46,
    },
    inactiveIcon: {
      height: 11,
      width: 11,
      borderRadius: 100,
      backgroundColor: color51,
    },
    text: {
      fontSize: 10,
      lineHeight: 19,
      fontFamily: 'SF Pro Display',
      color: activeStep >= step ? color18 : color52,
      marginTop: 10,
    },
    connectView: {
      position: 'absolute',
      top: 16,
      height: 2,
      backgroundColor: activeStep >= step ? color26 : color51,
      width: 100,
      right: 20,
    },
  });

  return (
    <View style={styles.step}>
      <View style={styles.view}>
        {activeStep > step && <Image source={AcitveImg} />}
        {activeStep === step && (
          <View style={styles.activeIcon}>
            <Text> </Text>
          </View>
        )}
        {activeStep < step && step !== stepCount - 1 && (
          <View style={styles.inactiveIcon}>
            <Text> </Text>
          </View>
        )}
      </View>
      <Text style={styles.text}>{row}</Text>
      {step !== 0 && (
        <View style={styles.connectView}>
          <Text> d</Text>
        </View>
      )}
    </View>
  );
};

export default Step;
