import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  bigGray,
  color40,
  primaryMain,
  softBlack,
  softBlue,
  softGray,
  white,
} from '../../ui/common/colors';
import {emailValidation} from '../../utils/emailValidation';

import g_styles from '../../ui/common/styles';
import GoogleSignButton from '../../components/auth/GoogleSignButton';
import LogoSection from '../../components/auth/LogoSection';
import Input from '../../components/auth/Input';
import RememberMe from '../../components/auth/RememberMe';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);

  const onSubmit = async () => {
    setErrors(false);
    const isEmail = emailValidation(email);
    if (!isEmail || password === '') {
      setErrors(true);
      return false;
    }
    // navigation.navigate('AccessClosingRoom');
    navigation.navigate('SelectRole');
  };

  return (
    <SafeAreaView>
      <ScrollView style={g_styles.container}>
        <View style={g_styles.box}>
          {/* Logo */}
          <View style={g_styles.mt_70}>
            <LogoSection />
          </View>

          {/* Form */}
          <View style={g_styles.mt_50}>
            <Text style={styles.titleText}>Sign Up</Text>
            {/* Email Input */}
            <Input
              label={'Email'}
              secureTextEntry={false}
              value={email}
              onChangeValue={setEmail}
              error={errors?.email}
            />
            {/* Password Input */}
            <Input
              label={'Password'}
              secureTextEntry={true}
              value={password}
              onChangeValue={setPassword}
              error={errors?.password}
            />
            {/* Re Enter Password Input */}
            <Input
              label={'Re-enter Password'}
              secureTextEntry={true}
              value={password2}
              onChangeValue={setPassword2}
              error={errors?.setPassword2}
            />
            {/* Remember Me CheckBox */}
            <RememberMe />

            <TouchableOpacity
              style={styles.submitView}
              onPress={() => onSubmit()}>
              <Text style={styles.submitBtn}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.sublinText}>or continue with</Text>
            <GoogleSignButton />

            <View style={styles.commentView}>
              <Text style={styles.commentText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.commentLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  titleText: {
    color: softBlack,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    fontFamily: 'SF Pro Display',
  },
  errorBorder: {
    borderColor: color40,
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
  label: {
    color: softGray,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 19,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    borderColor: softBlue,
    borderWidth: 2,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
  },
  submitView: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
  },
  submitBtn: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  commentView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 70,
  },
  commentText: {
    color: bigGray,
    fontSize: 16,
    fontWeight: '400',
  },
  commentLink: {color: softBlue, fontWeight: '700'},
  sublinText: {
    color: softBlack,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
});
