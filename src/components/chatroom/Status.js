import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import g_styles from '../../ui/common/styles';
import {Shadow} from 'react-native-shadow-2';
import {color48, white} from '../../ui/common/colors';
import Step from './status/Step';

const notiImg = require('./../../../assets/images/nit.png');

const Status = () => {
  const steps = [
    'Opened',
    'Due Diligence',
    'Processing',
    'Clear to Close',
    'Funding',
  ];

  return (
    <View style={g_styles.my_5}>
      <View style={[g_styles.flex, g_styles.itemsCenter]}>
        <Text style={styles.titleText}>Status </Text>
        <Image source={notiImg} />
      </View>
      <View style={g_styles.mt_16}>
        <Shadow
          distance={3}
          offset={[0, 3]}
          startColor={'#00000010'}
          style={styles.progressView}>
          <View style={styles.steps}>
            {steps.map((row, key) => {
              return (
                <Step
                  row={row}
                  step={key}
                  activeStep={1}
                  key={key}
                  stepCount={steps.length}
                />
              );
            })}
          </View>
        </Shadow>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  titleText: {
    color: color48,
    fontSize: 18,
    fontWeight: '700',
  },
  progressView: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: white,
    padding: 24,
    width: '100%',
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
