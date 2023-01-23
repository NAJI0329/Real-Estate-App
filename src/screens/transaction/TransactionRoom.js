import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {black1, white} from '../../ui/common/colors';
import UnlockifyNav from '../../components/UnlocakifyNav';
import SearchInput from '../../components/SearchInput';
import TransactionRoomBottomMenu from '../../components/Transaction/TransactionRoomBottomMenu';
import useFileSelector from '../../hooks/useFileSelector';
import TransactionItem from '../../components/Transaction/TransactionItem';
import SelectType from './SelectType';
import g_styles from '../../ui/common/styles';

const Avatar = require('./../../../assets/images/user.png');
const PlusImage = require('./../../../assets/images/plus.png');

const TransactionRoom = () => {
  const {openImageLibrary} = useFileSelector();
  const [resourcePath, setResourcePath] = useState({});
  const [searchValue, setSearchValue] = useState('#123 Main St');
  const [transactions, setTransactions] = useState([
    {
      fileNumber: '#123 Main St',
      address: 'San Antonio, TX, 79529',
      status: 'Open',
    },
    {
      fileNumber: '#133 Main St',
      address: 'San Antonio, TX, 79529',
      status: 'Open',
    },
    {
      fileNumber: '#723 Main St',
      address: 'San Antonio, TX, 79529',
      status: 'Open',
    },
    {
      fileNumber: '#123 Main St',
      address: 'San Antonio, TX, 79529',
      status: 'Closed',
    },
    {
      fileNumber: '#123 Main St',
      address: 'San Antonio, TX, 79529',
      status: 'Closed',
    },
  ]);

  const onSelectAvatar = async () => {
    const res = await openImageLibrary();
    setResourcePath(res);
  };

  const types = ['Open', 'Closed', 'All'];
  const [type, setType] = useState(types[0]);

  return (
    <View style={g_styles.container}>
      <UnlockifyNav title="Simple Deeds" />
      <ScrollView>
        <View style={g_styles.box}>
          <View style={styles.avatarView}>
            <View>
              <Image
                source={resourcePath.uri ? {uri: resourcePath.uri} : Avatar}
                style={styles.avatar}
              />
              <TouchableOpacity onPress={onSelectAvatar}>
                <Image source={PlusImage} style={styles.addView} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Title’s Agent Name</Text>
          </View>
          <SelectType types={types} type={type} setType={setType} />
          <View style={styles.searchView}>
            <SearchInput
              placeholder={'Type file number, address or phone number.'}
              value={searchValue}
              onChangeValue={setSearchValue}
            />
          </View>
          <View style={styles.itemView}>
            {transactions.map((row, key) => {
              if (
                searchValue === row.fileNumber &&
                (row.status === type || type === 'All')
              ) {
                return <TransactionItem key={key} row={row} />;
              }
            })}
          </View>
        </View>
      </ScrollView>
      <TransactionRoomBottomMenu />
    </View>
  );
};

export default TransactionRoom;

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
    // backgroundColor: black1,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: black1,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 5,
  },
  subTitle: {
    color: black1,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  searchView: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  itemView: {
    marginTop: 30,
  },
});
