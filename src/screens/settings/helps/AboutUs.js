import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {color43, primaryMain, softBlack} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const LOGO_IMG = require('./../../../../assets/images/Horizontal-Logo-Negative.png');

const AboutUs = () => {
  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'About Us'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          <View style={[g_styles.itemsCenter, g_styles.mt_20]}>
            <Image source={LOGO_IMG} style={g_styles.h_50px} />
          </View>
          <Text style={styles.logoText}>Simple Deeds</Text>
          <Text style={styles.title}>We love real estate</Text>
          <Text style={styles.comment}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id
            volutpat lacus laoreet non curabitur gravida arcu. Amet nisl purus
            in mollis nunc sed id. Elementum curabitur vitae nunc sed. A
            pellentesque sit amet porttitor eget. Ac turpis egestas integer eget
            aliquet nibh. Nibh praesent tristique magna sit amet purus gravida.
          </Text>
          <Text style={styles.comment}>
            Sagittis vitae et leo duis ut diam. Et pharetra pharetra massa
            massa. Faucibus et molestie ac feugiat. Ac feugiat sed lectus
            vestibulum. Sagittis eu volutpat odio facilisis. Venenatis urna
            cursus eget nunc scelerisque viverra mauris. Facilisi cras fermentum
            odio eu feugiat pretium nibh ipsum consequat. Etiam tempor orci eu
            lobortis elementum nibh. Quis auctor elit sed vulputate mi sit.
          </Text>
          <Text style={styles.comment}>
            Sagittis eu volutpat odio facilisis. Venenatis urna cursus eget nunc
            scelerisque viverra mauris. Facilisi cras
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  logoText: {
    color: primaryMain,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    color: softBlack,
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 34,
    marginTop: 10,
    textAlign: 'center',
  },
  comment: {
    marginTop: 10,
    marginBottom: 15,
    color: color43,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
});
