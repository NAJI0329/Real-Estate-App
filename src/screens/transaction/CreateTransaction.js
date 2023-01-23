import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopTitle from '../../components/TopTitle';
import g_styles from '../../ui/common/styles';
import MainActionButton from '../../components/MainActionButton';
import {primaryMain, grayBlack} from '../../ui/common/colors';

const UploadImg = require('./../../../assets/images/upload.png');

const CreateTransaction = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    navigation.navigate('UploadFiles');
  };

  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'Create Transaction'}
        prevPath={'TransactionRoom'}
        closePath="SignIn"
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.view}>
          <View style={g_styles.itemsCenter}>
            <Image source={UploadImg} />
            <Text style={styles.title}>Upload Your Contract</Text>
            <Text style={styles.text}>
              Please upload your contract to {'\n'} pull up the information.
            </Text>
          </View>
        </View>
      </ScrollView>
      <MainActionButton text={'Upload Contract'} onPress={onPress} />
    </View>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  title: {
    color: primaryMain,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29,
    marginTop: 30,
    textAlign: 'center',
  },
  text: {
    color: grayBlack,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
