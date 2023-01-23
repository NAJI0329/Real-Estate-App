import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {
  color20,
  color46,
  gray1,
  primaryMain,
  white,
} from '../../../ui/common/colors';

import g_styles from '../../../ui/common/styles';
import MainActionButton from '../../../components/MainActionButton';

const MoneyIcon = require('./../../../../assets/images/money.png');

const EditSalesPrice = ({navigation}) => {
  const [price, setPrice] = useState('$3,500,000');

  return (
    <View style={g_styles.container}>
      <TopTitle
        title={'Edit Sales Price'}
        prevPath={'ConfirmInformation'}
        closePath="SignIn"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Sales Price</Text>
          <View>
            <Text style={styles.label}>Set Price</Text>
            <View style={styles.inputBox}>
              <Image source={MoneyIcon} />
              <TextInput
                style={styles.selectBox}
                onChangeText={setPrice}
                value={price}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <MainActionButton text={'Request Change'} bgColor={color46} />
    </View>
  );
};

export default EditSalesPrice;

const styles = StyleSheet.create({
  title: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  label: {
    color: gray1,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 5,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    borderColor: color20,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 5,
  },
  selectBox: {
    paddingLeft: 10,
  },
});
