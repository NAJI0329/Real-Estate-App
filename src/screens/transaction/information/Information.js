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
      subContent: '22/01/23',
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
    <SafeAreaView>
      <View style={[styles.view, g_styles.container]}>
        <TopTitle
          title={'Confirm Information'}
          prevPath={'SignUp'}
          closePath="SignUp"
        />
        <View style={[styles.middle_view, g_styles.box]}>
          <Text style={styles.infoText}>Transaction Infromation</Text>

          <FlatList
            data={items}
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
          {/* <TransactionInfoItem
            icon={icon2}
            title={'Legal Number'}
            content={'#398239482348273487'}
            linkPath={''}
          /> */}
          {/* <TransactionInfoItem
            icon={icon4}
            title={'Type of order'}
            content={'1/4 Family'}
            linkPath={''}
          /> */}
        </View>
        <MainActionButton
          text={'Continue'}
          onPress={() => navigation.navigate('ContactList')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmInformation;

const styles = StyleSheet.create({
  view: {},
  middle_view: {
    flex: 1,
  },
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
