import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {color19, primaryMain, white} from '../ui/common/colors';

const MainActionButton = ({text, onPress, isDisable = false, bgColor}) => {
  const styles = StyleSheet.create({
    submitView: {
      padding: 15,
      paddingBottom: 40,
      flex: Platform.OS === 'ios' ? 0.17 : 0,
    },
    submitText: {
      textAlign: 'center',
      color: white,
      fontWeight: '700',
      fontSize: 18,
    },
    submitBtn: {
      backgroundColor: bgColor ? bgColor : primaryMain,
      padding: 20,
      borderRadius: 32,
    },
    disableButton: {
      backgroundColor: color19,
    },
  });

  return (
    <View style={styles.submitView}>
      <TouchableOpacity
        style={[styles.submitBtn, isDisable && styles.disableButton]}
        onPress={() => {
          if (!isDisable) {
            onPress();
          }
        }}>
        <Text style={styles.submitText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainActionButton;
