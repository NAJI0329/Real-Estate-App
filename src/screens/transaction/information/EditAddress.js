import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import TopTitle from '../../../components/TopTitle';
import {
  color20,
  color46,
  gray1,
  primaryMain,
  white,
} from '../../../ui/common/colors';
import Dropdown from '../../../components/common/Dropdown';

import g_styles from '../../../ui/common/styles';
import MainActionButton from '../../../components/MainActionButton';

const EditAddress = ({navigation}) => {
  const [address, setAddress] = useState('800 Denton Rd');
  const [address2, setAddress2] = useState('Apt 16');

  const [citiesOpen, setCitiesOpen] = useState(false);
  const [citiesItems, setCitiesItems] = useState([
    {label: 'Milami', value: 'Milami'},
    {label: 'New York', value: 'ny'},
  ]);
  const [citiesValue, setCitiesValue] = useState(citiesItems[0].value);

  const [statesOpen, setStatesOpen] = useState(false);
  const [statesItems, setStatesItems] = useState([
    {label: 'Florida', value: 'Florida'},
    {label: 'Texas', value: 'Texas'},
  ]);
  const [statesValue, setStatesValue] = useState(statesItems[0].value);

  const [countriesOpen, setCountriesOpen] = useState(false);
  const [countriesItems, setCountriesItems] = useState([
    {label: 'United States', value: 'us'},
    {label: 'United Kingdom', value: 'uk'},
    {label: 'Australia', value: 'au'},
  ]);
  const [countriesValue, setCountriesValue] = useState(countriesItems[0].value);
  const [zipCode, setZipCode] = useState('64423');

  const [typesOpen, setTypesOpen] = useState(false);
  const [typesItems, setTypesItems] = useState([
    {label: 'Lot 3 Block 12', value: 'us'},
    {label: 'Lot 3 Block 12', value: 'uk'},
    {label: 'Lot 3 Block 12', value: 'au'},
  ]);
  const [typesValue, setTypesValue] = useState(typesItems[0].value);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'Edit Address '}
        prevPath={'ConfirmInformation'}
        closePath="SignIn"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Property Address</Text>
          <View>
            <Text style={styles.label}>
              Addres Line #1 (Street Address, P.O Box)
            </Text>
            <TextInput
              style={styles.selectBox}
              onChangeText={setAddress}
              value={address}
            />
          </View>
          <View>
            <Text style={styles.label}>
              Addres Line #2 (Apartment, sute, unit, building, floor, etc.)
            </Text>
            <TextInput
              style={styles.selectBox}
              onChangeText={setAddress2}
              value={address2}
            />
          </View>
          <View style={g_styles.flex}>
            <View style={[g_styles.w_p50, g_styles.pr_10]}>
              <Text style={styles.label}>City</Text>
              <Dropdown
                open={citiesOpen}
                value={citiesValue}
                items={citiesItems}
                setOpen={setCitiesOpen}
                setValue={setCitiesValue}
                setItems={setCitiesItems}
                dropDownDirection="TOP"
              />
            </View>
            <View style={[g_styles.w_p50, g_styles.pl_10]}>
              <Text style={styles.label}>State</Text>
              <Dropdown
                open={statesOpen}
                value={statesValue}
                items={statesItems}
                setOpen={setStatesOpen}
                setValue={setStatesValue}
                setItems={setStatesItems}
                dropDownDirection="TOP"
              />
            </View>
          </View>
          <View style={g_styles.flex}>
            <View style={[g_styles.w_p30, g_styles.pr_10]}>
              <Text style={styles.label}>Zip/Code</Text>
              <TextInput
                style={styles.selectBox}
                onChangeText={setZipCode}
                value={zipCode}
              />
            </View>
            <View style={[g_styles.w_p70, g_styles.pr_10]}>
              <Text style={styles.label}>Country</Text>
              <Dropdown
                open={countriesOpen}
                value={countriesValue}
                items={countriesItems}
                setOpen={setCountriesOpen}
                setValue={setCountriesValue}
                setItems={setCountriesItems}
                dropDownDirection="TOP"
              />
            </View>
          </View>
          <Text style={[styles.title, g_styles.mt_20]}>Legal Description</Text>
          <View style={[g_styles.w_p50]}>
            <Text style={styles.label}>Type</Text>
            <Dropdown
              open={typesOpen}
              value={typesValue}
              items={typesItems}
              setOpen={setTypesOpen}
              setValue={setTypesValue}
              setItems={setTypesItems}
              dropDownDirection="TOP"
            />
          </View>
        </View>
      </ScrollView>
      <MainActionButton text={'Request Change'} bgColor={color46} />
    </SafeAreaView>
  );
};

export default EditAddress;

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
  selectBox: {
    borderRadius: 100,
    borderColor: color20,
    borderWidth: 1,
    paddingLeft: 20,
    backgroundColor: white,
  },
});
