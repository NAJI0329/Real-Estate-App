import React from 'react';
import {TextInput, StyleSheet, Text, View, Platform} from 'react-native';
import {color40, softBlue, softGray} from '../../ui/common/colors';

const Input = ({value, onChangeValue, label, secureTextEntry, error}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.errorBorder : null]}
        onChangeText={onChangeValue}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
    height: 48,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
  },
  errorBorder: {
    borderColor: color40,
  },
});
