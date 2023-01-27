import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {primaryMain, white} from '../ui/common/colors';
import {deviceWidth, deviceHeight} from '../ui/common/responsive';
import g_styles from '../ui/common/styles';

const LogoImg = require('./../../assets/images/logo/white_logo.png');

const Splash = ({navigation}) => {
  // after 2 seconds it should redirect to Login
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[g_styles.flex, g_styles.justifyCenter, g_styles.itemsCenter]}>
        <Image source={LogoImg} style={styles.logo} />
        <Text style={styles.logoText}>Simple Deeds</Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>
          This is another great message, this is your true choice
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    paddingTop: 170,
    backgroundColor: primaryMain,
  },
  logoText: {
    color: white,
    textAlign: 'center',
    fontSize: 38,
    marginLeft: 20,
    fontWeight: '700',
    lineHeight: 51,
    fontFamily: 'SF Pro Display',
  },
  bottomView: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomText: {
    color: white,
    fontSize: 20,
    lineHeight: 28,
    maxWidth: 300,
    textAlign: 'center',
    fontWeight: '700',
  },
});
