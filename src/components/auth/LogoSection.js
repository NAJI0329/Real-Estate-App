import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {primaryMain} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const LogoIcon = require('./../../../assets/images/logo/logo.png');

const LogoSection = () => {
  return (
    <View style={[g_styles.flex, g_styles.justifyCenter, g_styles.itemsCenter]}>
      <Image source={LogoIcon} style={styles.logo} />
      <Text style={styles.logoText}>Simple Deeds</Text>
    </View>
  );
};

export default LogoSection;

const styles = StyleSheet.create({
  logoText: {
    color: primaryMain,
    textAlign: 'center',
    fontSize: 38,
    marginLeft: 20,
    fontWeight: '700',
    lineHeight: 51,
    fontFamily: 'SF Pro Display',
  },
});
