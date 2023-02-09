import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AssignUserItem from '../../components/Item/AssignUserItem';
import MainActionButton from '../../components/MainActionButton';

import TopTitle from '../../components/TopTitle';
import {color20, primaryMain} from '../../ui/common/colors';

import g_styles from '../../ui/common/styles';

const User1Img = require('../../../assets/images/users/buyer_agent.png');
const User2Img = require('../../../assets/images/users/buyer.png');
const User3Img = require('../../../assets/images/users/loan_officer.png');
const User4Img = require('../../../assets/images/users/seller.png');
const User5Img = require('../../../assets/images/users/seller_agent.png');

const CreateTask = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [selectedUsers, setSelectedUsers] = useState(['1', '2']);
  const [users] = useState([
    {
      id: '1',
      avatar: User1Img,
      role: 'Seller’s Agent',
      name: 'Ari Setiawan',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '2',
      avatar: User2Img,
      role: 'Buyer',
      name: 'Jessica Garza',
      email: 'rico@nutechadvisors.com',
    },
    {
      id: '3',
      avatar: User3Img,
      role: 'Seller',
      name: 'Daniel Fernandez',
      email: 'rico@nutechadvisors.com',
    },
  ]);

  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle
        title={'Tasks'}
        prevPath={'TransactionRoom'}
        closePath="SignUp"
      />
      <ScrollView>
        <View style={g_styles.box}>
          <Text style={styles.title}>Create a Task</Text>
          <View>
            <Text style={styles.label}>Task's Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.label}>Task Description</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDescription}
              value={description}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View>
            <Text style={styles.label}>Assign task to: </Text>

            <FlatList
              data={users}
              style={g_styles.py_5}
              renderItem={({item}) => (
                <AssignUserItem
                  row={item}
                  selectedUsers={selectedUsers}
                  setSelectedUsers={setSelectedUsers}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <MainActionButton
        text={'Set Date'}
        onPress={() => navigation.navigate('setD')}
      />
    </SafeAreaView>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  title: {
    color: primaryMain,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  label: {
    color: primaryMain,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 15,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color20,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 5,
  },
});
