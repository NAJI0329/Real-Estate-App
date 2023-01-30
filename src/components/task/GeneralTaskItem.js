import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  black1,
  color40,
  color38,
  primaryMain,
  white,
  color29,
} from '../../ui/common/colors';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import g_styles from '../../ui/common/styles';

const GeneralTaskItem = ({row}) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    itemView: {
      flex: 1,
      padding: 20,
      backgroundColor: white,
      borderRadius: 8,
      marginBottom: 20,
      width: '100%',
      borderWidth: 1,
      borderColor: color40,
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
      fontStyle: 'SF Pro Display',
    },
    usersView: {
      flexDirection: 'row',
      marginTop: 10,
      lineHeight: 20,
    },
    avatar: {
      height: 24,
      width: 24,
      borderRadius: 100,
      marginRight: -8,
    },
    unsplash: {
      flex: 1,
      width: '100%',
      marginTop: 18,
    },
    addressView: {
      position: 'absolute',
      top: 30,
      left: 20,
    },
    addressTitle: {
      color: color29,
      lineHeight: 20,
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'SF Pro Display',
    },
    addressText: {
      color: color29,
      lineHeight: 18,
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'SF Pro Display',
    },
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatBox')}>
      <Shadow
        distance={3}
        offset={[0, 3]}
        startColor={'#00000010'}
        style={styles.itemView}>
        <View>
          <View style={[g_styles.flex, g_styles.justifyBetween]}>
            <View style={[{flex: 1}, g_styles.flex, g_styles.justifyBetween]}>
              <View>
                <Text style={styles.sessionName}>{row?.title}</Text>
                <Text style={styles.description}>{row?.description}</Text>
              </View>
              <Text style={styles.dateText}>{row?.date}</Text>
            </View>
          </View>
          <View>
            <Image source={row?.unsplash} style={styles.unsplash} />
            <View style={styles.addressView}>
              <Text style={styles.addressTitle}>Address</Text>
              <Text style={styles.addressText}>794 Parker St.</Text>
              <Text style={styles.addressText}>
                Friendswood, Texas(TX), 75060
              </Text>
            </View>
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default GeneralTaskItem;
