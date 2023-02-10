import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  black1,
  color20,
  gray1,
  primaryMain,
  white,
} from '../../ui/common/colors';
import TopTitle from '../../components/TopTitle';
import useFileSelector from '../../hooks/useFileSelector';
import Dropdown from '../../components/common/Dropdown';
import g_styles from '../../ui/common/styles';
import MainActionButton from '../../components/MainActionButton';

const Avatar = require('./../../../assets/images/large-avatar.png');

const EditProfile = ({navigation}) => {
  const {openImageLibrary} = useFileSelector();

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

  const [fullname, setFullname] = useState('Daniel');
  const [lastname, setLastname] = useState('Fernandez');
  const [phone, setPhone] = useState('+1 (214) 232 7453');
  const [email, setEmail] = useState('danielfernandez@nutechadvisors.com');
  const [address, setAddress] = useState('800 Denton Rd');
  const [address2, setAddress2] = useState('Apt 16');
  const [zipCode, setZipCode] = useState('64423');

  const [resourcePath, setResourcePath] = useState({});

  const onSelectAvatar = async () => {
    const res = await openImageLibrary();
    setResourcePath(res);
  };

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title="Edit Profile"
        prevPath={'ContactList'}
        closePath="SignIn"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <View style={styles.avatarView}>
            <View>
              <Image
                source={resourcePath.uri ? {uri: resourcePath.uri} : Avatar}
                style={styles.avatar}
              />
              <TouchableOpacity onPress={onSelectAvatar}>
                <View style={styles.addView}>
                  <Text style={styles.addBtn}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={g_styles.flex}>
            <View style={[g_styles.w_p50, g_styles.pr_10]}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={setFullname}
                value={fullname}
              />
            </View>
            <View style={[g_styles.w_p50, g_styles.pl_10]}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.TextInput}
                onChangeText={setLastname}
                value={lastname}
              />
            </View>
          </View>
          <View style={[g_styles.w_p100]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={[g_styles.w_p50, g_styles.pr_10]}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={setPhone}
              value={phone}
            />
          </View>
          <View style={[g_styles.w_p100]}>
            <Text style={styles.label}>
              Addres Line #1 (Street Address, P.O Box)
            </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={setAddress}
              value={address}
            />
          </View>
          <View style={[g_styles.w_p100]}>
            <Text style={styles.label}>
              Addres Line #2 (Apartment, sute, unit, building, floor, etc.)
            </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={setAddress2}
              value={address2}
            />
          </View>
          <View style={g_styles.flex}>
            <View style={[g_styles.w_p30, g_styles.pr_10]}>
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
                style={styles.TextInput}
                onChangeText={setZipCode}
                value={zipCode}
              />
            </View>
            <View style={[g_styles.w_p70, g_styles.pl_10]}>
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
        </View>
      </ScrollView>
      <MainActionButton
        text={'Change Info'}
        onPress={() => {
          navigation.navigate('ContactList');
        }}
      />
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  avatarView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  addView: {
    position: 'absolute',
    backgroundColor: black1,
    borderRadius: 100,
    height: 20,
    width: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 6,
    right: 6,
  },
  addBtn: {
    color: white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    color: gray1,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  TextInput: {
    borderRadius: 100,
    borderColor: color20,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 5,
    backgroundColor: white,
    height: 50,
  },
  submitText: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
    fontSize: 18,
  },
  submitBtn: {
    padding: 20,
    backgroundColor: primaryMain,
    borderRadius: 32,
  },
  submitView: {padding: 20, marginBottom: 30, marginTop: 20},
});
