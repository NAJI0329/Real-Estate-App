import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import TopTitle from '../../components/TopTitle';
import {color29, primaryMain, white} from '../../ui/common/colors';

import {deviceHeight} from '../../ui/common/responsive';
import FileItem from '../../components/chat/FileItem';
import g_styles from '../../ui/common/styles';
import MainActionButton from '../../components/MainActionButton';

const documentImg = require('./../../../assets/images/item4.png');

const UploadFiles = ({navigation}) => {
  const [files, setFiles] = useState([
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
    {
      name: 'Scanned_Contract_23234.pdf',
      fileSize: '3.6 MB',
      date: '01/10/2023',
    },
  ]);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'Upload Files'}
        prevPath={'ChatBox'}
        closePath={'SignIn'}
      />
      <View style={styles.searchView}>
        <Image source={documentImg} />
        <Text style={styles.searchText}>Search other documents</Text>
      </View>
      <ScrollView>
        <View style={styles.box}>
          {files.map((row, key) => {
            return <FileItem row={row} key={key} />;
          })}
        </View>
      </ScrollView>
      <MainActionButton
        text={'Upload File'}
        onPress={() => navigation.navigate('ChatBox')}
      />
    </SafeAreaView>
  );
};

export default UploadFiles;

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: color29,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  searchText: {
    color: primaryMain,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    paddingLeft: 10,
  },
  box: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  submitView: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitBtn: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginBottom: 25,
  },
});
