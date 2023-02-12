import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import MainActionButton from '../../../components/MainActionButton';
import TopTitle from '../../../components/TopTitle';
import {
  color20,
  color53,
  softBlack,
  softGray,
  white,
} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const ContactUs = () => {
  const [isDisable, setDisable] = useState(true);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSend = async () => {
    const req = {
      fullname,
      email,
      message,
    };
  };

  useEffect(() => {
    if (fullname && email && message) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [fullname, email, message]);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'Contact Us'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          <View>
            <Text style={styles.label}>
              Full Name<Text style={styles.requireIcon}>*</Text>
            </Text>
            <TextInput
              style={[styles.textinput, g_styles.mt_8]}
              placeholder="Full Name"
              value={fullname}
              onChangeText={setFullname}
            />
          </View>
          <View style={g_styles.mt_16}>
            <Text style={styles.label}>
              Email<Text style={styles.requireIcon}>*</Text>
            </Text>
            <TextInput
              style={[styles.textinput, g_styles.mt_8]}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={g_styles.mt_16}>
            <View
              style={[
                g_styles.flex,
                g_styles.justifyBetween,
                g_styles.itemsCenter,
              ]}>
              <Text style={styles.label}>
                Message<Text style={styles.requireIcon}>*</Text>
              </Text>
              <Text style={styles.maxText}>Max 250 words</Text>
            </View>
            <TextInput
              style={[styles.textarea, g_styles.mt_8]}
              placeholder="Message"
              multiline={true}
              numberOfLines={6}
              textAlignVertical={'top'}
              value={message}
              onChangeText={setMessage}
            />
          </View>
        </View>
      </ScrollView>

      <MainActionButton
        text="Send Message"
        onPress={onSend}
        isDisable={isDisable}
      />
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  label: {
    color: softGray,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    paddingLeft: 20,
    fontFamily: 'SF Pro Display',
  },
  textinput: {
    borderRadius: 100,
    borderColor: color20,
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: white,
    fontSize: 16,
    height: 50,
  },
  textarea: {
    borderRadius: 16,
    borderColor: color20,
    borderWidth: 1,
    padding: 16,
    backgroundColor: white,
    fontSize: 16,
    height: 150,
  },
  requireIcon: {
    color: color53,
  },
  maxText: {
    color: softBlack,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    marginRight: 20,
  },
});
