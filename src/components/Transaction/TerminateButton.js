import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  color19,
  color40,
  primaryMain,
  softGray,
  white,
} from '../../ui/common/colors';
import BottomSheet from '../BottomSheet';

const WarnImg = require('./../../../assets/images/warn-lg.png');

const TerminateButton = ({text, onPress, isDisable = false, bgColor}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    submitView: {
      padding: 15,
      paddingBottom: 40,
    },
    submitText: {
      textAlign: 'center',
      color: white,
      fontWeight: '700',
      fontSize: 18,
    },
    submitBtn: {
      backgroundColor: color40,
      padding: 20,
      borderRadius: 8,
    },
    disableButton: {
      backgroundColor: color19,
    },

    container: {
      alignItems: 'center',
      paddingTop: 10,
    },
    text: {
      color: softGray,
      fontSize: 16,
      fontWeight: '500',
      marginTop: 30,
    },
    buttonView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    cancelButton: {
      borderWidth: 1,
      borderColor: primaryMain,
      borderRadius: 100,
      padding: 10,
      textAlign: 'center',
      marginRight: 10,
      width: 170,
    },
    cancelText: {
      color: primaryMain,
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
    },
    confirmButton: {
      borderWidth: 1,
      backgroundColor: color40,
      borderColor: color40,
      borderRadius: 100,
      padding: 10,
      textAlign: 'center',
      marginLeft: 10,
      width: 170,
    },
    confirmText: {
      color: white,
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
    },
  });

  const onConfirm = async () => {
    setModalVisible(false);
  };

  const onCancel = async () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.submitView}>
        <TouchableOpacity
          style={[styles.submitBtn, isDisable && styles.disableButton]}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.submitText}>Terminate Transaction</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        backgroundColor="#09101D70"
        bodyColor="#FFFFFF">
        <View style={styles.container}>
          <Image source={WarnImg} />
          <Text style={styles.text}>
            Are you sure want to terminate the transaction?
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>No, keep it</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Yes, terminate it</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default TerminateButton;
