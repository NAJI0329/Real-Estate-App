import React, {useState} from 'react';

import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {color48} from '../ui/common/colors';

import TaskRoomBottomMenu from '../components/TaskRoomBottomMenu';
import g_styles from '../ui/common/styles';
import TransactionItem from '../components/chatroom/TransactionItem';
import TopTitle from '../components/TopTitle';
import TaskInfo from '../components/taskroom/TaskInfo';
import AssignedUserItem from '../components/taskroom/AssignedUserItem';
import BottomFileAddBtn from '../components/BottomFileAddBtn';
import BottomSheet from '../components/BottomSheet';
import FileSelectModal from '../components/chat/FileSelectModal';

const notiImg = require('./../../assets/images/nit.png');

const TaskRoom = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={g_styles.container}>
      <TopTitle title={'tasks'} closePath="SignIn" prevPath={'ChatRoom'} />
      <ScrollView>
        <View style={g_styles.box}>
          {/* Transaction */}
          <View>
            <View style={[g_styles.flex, g_styles.itemsCenter]}>
              <Text style={styles.titleText}>Transaction </Text>
              <Image source={notiImg} />
            </View>
            <View style={g_styles.mt_10}>
              <TransactionItem
                row={{
                  address: '1276 County Rd #4206 Knox City, Texas(TX), 79529',
                }}
                showStatusIcon={false}
              />
            </View>
          </View>
          {/* Task Information */}
          <TaskInfo />
          {/* Assigned User */}
          <Text style={styles.taskTitle}>Task assigned by:</Text>
          <AssignedUserItem />
        </View>
      </ScrollView>
      <BottomFileAddBtn onPress={() => setModalVisible(!modalVisible)} />

      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <FileSelectModal />
      </BottomSheet>
    </View>
  );
};

export default TaskRoom;

const styles = StyleSheet.create({
  titleText: {
    color: color48,
    fontSize: 18,
    fontWeight: '700',
  },
  taskTitle: {
    marginTop: 20,
    color: color48,
    fontSize: 14,
    fontWeight: '700',
  },
});
