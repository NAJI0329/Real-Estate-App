import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {white, gray1, color44} from '../../ui/common/colors';
import {Shadow} from 'react-native-shadow-2';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleImg = require('./../../../assets/images/google.png');

const GoogleSignButton = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '38589584158-fj02ajujk7j7u56upe70o1i522vsj47n.apps.googleusercontent.com',
      iosClientId:
        '38589584158-h09c1ocjihjfvao929o8qrjc0d3nb47p.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn().then(result => {
        console.log(result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  return (
    <TouchableOpacity onPress={() => GoogleSingUp()}>
      <Shadow distance={3} offset={[0, 1]} style={styles.googleVIew}>
        <Image source={GoogleImg} style={styles.googleImg} />
        <Text style={styles.googleText}>Google</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default GoogleSignButton;

const styles = StyleSheet.create({
  googleVIew: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: gray1,
    borderRadius: 8,
    paddingVertical: 13,
    backgroundColor: white,
  },
  googleText: {
    color: color44,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
