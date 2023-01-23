import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MainActionButton from '../../components/MainActionButton';
import TopTitle from '../../components/TopTitle';
import TerminateButton from '../../components/Transaction/TerminateButton';
import TransactionInfoItem from '../../components/Transaction/TransactionInfoItem';
import {primaryMain, white} from '../../ui/common/colors';
import g_styles from '../../ui/common/styles';

const icon1 = require('./../../../assets/images/icon1.png');
// const icon2 = require('./../../assets/images/icon2.png');
const icon3 = require('./../../../assets/images/icon3.png');
// const icon4 = require('./../../assets/images/icon4.png');
const icon5 = require('./../../../assets/images/icon5.png');
const ExecutedContractImg = require('./../../../assets/images/excuted-contract.png');
const UsersImg = require('./../../../assets/images/users.png');

const TerminateTransaction = ({navigation}) => {
  return (
    <View style={g_styles.container}>
      <TopTitle title={'Transaction'} prevPath={'SignIn'} />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.infoText}>Transaction Infromation</Text>
          <TransactionInfoItem
            icon={ExecutedContractImg}
            title={'Executed Contract'}
            content={'Uploaded Date'}
            subContent={'22/01/23'}
            active={true}
          />
          <TransactionInfoItem
            icon={UsersImg}
            title={'Contacts Information'}
            content={'All Parties'}
            active={true}
          />
          <TransactionInfoItem
            icon={icon1}
            title={'Property Address'}
            content={'1276 County Rd # 4206 Knox City, Texas (TX), 79529'}
            linkPath={'EditAddress'}
          />
          {/* <TransactionInfoItem
            icon={icon2}
            title={'Legal Number'}
            content={'#398239482348273487'}
            linkPath={''}
          /> */}
          <TransactionInfoItem
            icon={icon3}
            title={'Sales Price'}
            content={'$3,500,000'}
            linkPath={'EditSalesPrice'}
          />
          {/* <TransactionInfoItem
            icon={icon4}
            title={'Type of order'}
            content={'1/4 Family'}
            linkPath={''}
          /> */}
          <TransactionInfoItem
            icon={icon5}
            title={'Due Diligence'}
            content={'Jan-19-2023, Thursday 5:00 P.M.'}
            linkPath={'EditDueDiligenceDate'}
          />
          <TransactionInfoItem
            icon={icon5}
            title={'Projected Closing Day'}
            content={'Jan-19-2023, Thursday'}
            linkPath={'EditClosingDate'}
          />
        </View>
        <TerminateButton />
      </ScrollView>
    </View>
  );
};

export default TerminateTransaction;

const styles = StyleSheet.create({
  infoText: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitView: {
    marginBottom: 60,
  },
  submitBtn: {
    backgroundColor: primaryMain,
    padding: 20,
    borderRadius: 32,
    marginTop: 25,
    marginBottom: 25,
  },
});
