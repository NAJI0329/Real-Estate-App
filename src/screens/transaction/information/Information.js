import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import MainActionButton from '../../../components/MainActionButton';
import TopTitle from '../../../components/TopTitle';
import TransactionInfoItem from '../../../components/TramsactomInfoItem';
import {primaryMain, white} from '../../../ui/common/colors';
import g_styles from '../../../ui/common/styles';

const icon1 = require('./../../../../assets/images/icon1.png');
// const icon2 = require('./../../assets/images/icon2.png');
const icon3 = require('./../../../../assets/images/icon3.png');
// const icon4 = require('./../../assets/images/icon4.png');
const icon5 = require('./../../../../assets/images/icon5.png');
const ExecutedContractImg = require('./../../../../assets/images/excuted-contract.png');
const TransactionIdImg = require('./../../../../assets/images/icons/copy.png');
const ContactsImg = require('./../../../../assets/images/icons/partners.png');

const ConfirmInformation = ({navigation}) => {
  const items = [
    {
      icon: TransactionIdImg,
      title: 'Transaction ID',
      content: '#00000000000000000009281745',
      active: true,
    },
    {
      icon: ExecutedContractImg,
      title: 'Executed Contract',
      content: 'Uploaded Date',
      subContent: '22/01/23',
      active: true,
    },
    {
      icon: ContactsImg,
      title: 'Contacts Information',
      content: 'All Parties',
      linkPath: 'ContactsInformation',
      active: true,
    },
    {
      icon: icon1,
      title: 'Property Address',
      content: '1276 County Rd # 4206 Knox City, Texas (TX), 79529',
      editPath: 'EditAddress',
    },
    {
      icon: icon3,
      title: 'Sales Price',
      content: '$3,500,000',
      editPath: 'EditSalesPrice',
    },
    {
      icon: icon5,
      title: 'Due Diligence',
      content: '27/01/23 5:00 P.M.',
      editPath: 'EditDueDiligenceDate',
    },
    {
      icon: icon5,
      title: 'Projected Closing Day',
      content: '27/01/23',
      editPath: 'EditClosingDate',
    },
  ];
  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'Confirm Information'}
        prevPath={'SignUp'}
        closePath="SignUp"
      />
      <View style={[g_styles.flex_1, g_styles.box]}>
        <Text style={styles.infoText}>Transaction Information</Text>

        <FlatList
          data={items}
          style={g_styles.py_5}
          renderItem={({item}) => (
            <TransactionInfoItem
              icon={item.icon}
              title={item.title}
              content={item.content}
              subContent={item.subContent}
              active={item.active}
              linkPath={item.linkPath}
              editPath={item.editPath}
            />
          )}
        />
      </View>
      <MainActionButton
        text={'Continue'}
        onPress={() => navigation.navigate('ContactList')}
      />
    </SafeAreaView>
  );
};

export default ConfirmInformation;

const styles = StyleSheet.create({
  infoText: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
});
