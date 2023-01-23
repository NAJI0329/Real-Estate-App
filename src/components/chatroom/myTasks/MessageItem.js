import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  black1,
  color40,
  color38,
  primaryMain,
  white,
} from '../../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

const MessageItem = ({row}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    itemBox: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: white,
      borderRadius: 8,
      marginBottom: 20,
      width: '100%',
    },
    iconView: {
      marginRight: 20,
      marginTop: 10,
    },
    icon: {
      height: 48,
      width: 48,
      borderRadius: 100,
      borderColor: color40,
      borderWidth: row?.count > 0 ? 1.5 : 0,
    },
    countView: {
      position: 'absolute',
      right: -3,
      top: -3,
      borderColor: white,
      borderWidth: 1,
      backgroundColor: color40,
      height: 16,
      width: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    countText: {
      color: white,
      fontSize: 12,
      lineHeight: 14,
      fontStyle: 'SF Pro Display',
    },
    sessionName: {
      color: primaryMain,
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
      fontStyle: 'SF Pro Display',
    },
    description: {
      color: black1,
      fontSize: 14,
      fontWeight: '400',
      fontStyle: 'SF Pro Display',
    },
    dateText: {
      color: color38,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 20,
      position: 'absolute',
      top: 20,
      right: 20,
      fontStyle: 'SF Pro Display',
    },
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatBox')}>
      <Shadow
        distance={4}
        offset={[0, 3]}
        startColor={'#00000010'}
        endColor={'#00000000'}
        style={styles.itemBox}>
        <View style={styles.iconView}>
          <Image source={row?.icon} style={styles.icon} />
          {row?.count > 0 && (
            <View style={styles.countView}>
              <Text style={styles.countText}>{row?.count}</Text>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.sessionName}>{row?.title}</Text>
          <Text style={styles.description}>{row?.description}</Text>
        </View>
        <Text style={styles.dateText}>{row?.date}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default MessageItem;
