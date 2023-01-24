import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, FlatList} from 'react-native';
import AddContactItem from '../../components/contact/AddContactItem';
import ContactItem from '../../components/ContactItem';
import MainActionButton from '../../components/MainActionButton';
import TopTitle from '../../components/TopTitle';
import g_styles from '../../ui/common/styles';

const sellerImg = require('../../../assets/images/users/seller.png');
const buyerImg = require('../../../assets/images/users/buyer.png');
const buyerAgentImg = require('../../../assets/images/users/buyer_agent.png');
const loanOfficerImg = require('../../../assets/images/users/loan_officer.png');
const SellerAgentImg = require('../../../assets/images/users/seller_agent.png');

const ContactsInformation = ({navigation}) => {
  const [isDisable, setDisable] = useState(true);

  const [list, setList] = useState([
    {
      id: '1',
      type: 'Seller',
      avatar: sellerImg,
      name: 'Lorenzo Garza',
      email: 'lorenzo@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX), 79529',
      code: 'RL: 2312',
    },
    {
      id: '2',
      type: 'Buyer',
      avatar: buyerImg,
      name: 'Lorenzo Garza',
      email: 'lorenzo@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX),  79529',
      code: 'RL: 2312',
    },
    {
      id: '3',
      type: "Buyer's Agent",
      avatar: buyerAgentImg,
      name: 'Lorenzo Garza',
      email: 'lorenzo@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX),  79529',
      code: 'RL: 2312',
    },
    {
      id: '4',
      type: 'Loan Officer',
      avatar: loanOfficerImg,
      name: 'Lorenzo Garza',
      email: 'lorenzo@nutechadvisors.com',
      phone: '(830) 202-6100',
      address: '1276 County Rd #4206 Knox City,',
      city: 'Texas(TX),  79529',
      code: 'RL: 2312',
    },
  ]);

  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    console.log('selectedList', selectedList);
  }, [selectedList]);

  return (
    <SafeAreaView>
    <View style={[styles.view, g_styles.container]}>
      <TopTitle
        title={'Contacts Information'}
        prevPath={'ContactList'}
        isClose={false}
      />
      <ScrollView style={styles.middle_view}>
        <View style={g_styles.box}>
          {list.map((row, key) => {
            return (
              <ContactItem
                key={key}
                row={row}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
              />
            );
          })}
          <AddContactItem />
        </View>
      </ScrollView>
      <MainActionButton
        text={'Create Transaction'}
        isDisable={isDisable}
        onPress={() => navigation.navigate('TransactionRoom')}
        style={{flex: 0.17}}
      />
    </View>
    </SafeAreaView>
  );
};

export default ContactsInformation;

const styles = StyleSheet.create({
  view: {

  },
  middle_view: {
    flex: 1
  },

});
