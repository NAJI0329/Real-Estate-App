import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import ToggleItem from '../../components/settings/ToggleItem';
import TopTitle from '../../components/TopTitle';
import {primaryMain} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const Security = ({navigation}) => {
  const [faceId, setFaceId] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [tourchId, setTouchId] = useState(false);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'Security'} prevPath={'Settings'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          <ToggleItem title={'Face ID'} value={faceId} setValue={setFaceId} />
          <ToggleItem
            title={'Remember me'}
            value={rememberMe}
            setValue={setRememberMe}
          />
          <ToggleItem
            title={'Touch ID'}
            value={tourchId}
            setValue={setTouchId}
          />
          <View style={styles.submitView}>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => navigation.navigate('ContactList')}>
              <Text style={styles.submitText}>Request to Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Security;

const styles = StyleSheet.create({
  submitText: {
    textAlign: 'center',
    color: primaryMain,
    fontWeight: '700',
    fontSize: 18,
  },
  submitView: {
    marginBottom: 60,
  },
  submitBtn: {
    borderColor: primaryMain,
    borderWidth: 1,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
    marginBottom: 25,
  },
});
