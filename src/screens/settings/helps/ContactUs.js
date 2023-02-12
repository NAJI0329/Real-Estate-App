import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {color20, softGray, white} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'Contact Us'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={[styles.textinput, g_styles.mt_8]}
              onChangeText={setFullname}
              placeholder="Full Name"
              value={fullname}
            />
          </View>
          <View style={g_styles.mt_16}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.textinput, g_styles.mt_8]}
              onChangeText={setEmail}
              placeholder="Email"
              value={email}
            />
          </View>
          <View style={g_styles.mt_16}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.textarea, g_styles.mt_8]}
              onChangeText={setMessage}
              placeholder="Message"
              value={message}
              multiline={true}
              numberOfLines={6}
              textAlignVertical={'top'}
            />
          </View>
        </View>
      </ScrollView>

      <View style={g_styles.submitView}>
        <TouchableOpacity style={g_styles.submitBtn}>
          <Text style={g_styles.submitText}>Send Message</Text>
        </TouchableOpacity>
      </View>
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
});
