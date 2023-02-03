import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  bigGray,
  primaryMain,
  softBlack,
  softBlue,
  white,
} from '../../ui/common/colors';
import GoogleSignButton from '../../components/auth/GoogleSignButton';
import g_styles from '../../ui/common/styles';
import LogoSection from '../../components/auth/LogoSection';
import Input from '../../components/auth/Input';
import RememberMe from '../../components/auth/RememberMe';
import {isEmail} from '../../utils';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const onSubmit = async () => {
    if (!validation()) {
      return false;
    }

    navigation.navigate('TransactionRoom');
  };

  const validation = () => {
    let tempErrors = {email: false, password: false};
    // Email Check
    const isEmailRes = isEmail(email);
    if (!isEmailRes || email === '') {
      tempErrors.email = true;
    }
    // Password Check
    if (password === '') {
      tempErrors.password = true;
    }
    // Set Error
    setErrors(tempErrors);
    // Return Value
    if (tempErrors.email || tempErrors.password) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={g_styles.container}>
      <ScrollView>
        <View style={g_styles.box}>
          {/* Logo */}
          <View style={g_styles.mt_70}>
            <LogoSection />
          </View>

          {/* Form */}
          <View style={g_styles.mt_50}>
            <Text style={styles.titleText}>Sign In</Text>
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
            {/* Remember Me CheckBox */}
            <RememberMe />
            <TouchableOpacity
              style={styles.submitView}
              onPress={() => onSubmit()}>
              <Text style={styles.submitBtn}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.sublinText}>or continue with</Text>
            <GoogleSignButton />

            <View style={styles.commentView}>
              <Text style={styles.commentText}>
                You don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.commentLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  titleText: {
    color: softBlack,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
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
