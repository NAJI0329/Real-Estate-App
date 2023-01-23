import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  color18,
  color23,
  color25,
  color26,
  color30,
  color47,
  white,
} from '../../ui/common/colors';
import {Shadow} from 'react-native-shadow-2';
import g_styles from '../../ui/common/styles';

// const transactionRoomImg = require('./../../../assets/images/transaction_room.png');
const transactionRoomImg = require('./../../../assets/images/unsplash_XGvwt544g8k.png');

const AddressIcon = require('./../../../assets/images/address.png');
const PriceIcon = require('./../../../assets/images/price.png');
const DayIcon = require('./../../../assets/images/day.png');

const TransactionItem = ({row, showStatusIcon = true}) => {
  const navigation = useNavigation();

  const onPress = async () => {
    navigation.navigate('CreateTransaction');
  };

  const styles = StyleSheet.create({
    box: {
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: row?.status === 'Closed' ? color47 : color30,
      marginBottom: 15,
      overflow: 'hidden',
      backgroundColor: white,
      width: '100%',
      opacity: row?.status === 'Closed' ? 0.4 : 1,
    },
    iconImg: {
      backgroundColor: color23,
      height: 135,
      width: 135,
      marginRight: 16,
    },
    label: {
      color: color18,
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 20,
      fontFamily: 'Source Sans Pro',
    },
    text: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 18,
      fontFamily: 'Source Sans Pro',
    },
    address: {
      color: color25,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      maxWidth: 80,
    },
    status: {
      position: 'absolute',
      top: 10,
      left: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: white,
      backgroundColor: color26,
      width: 16,
      height: 16,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Shadow
        distance={3}
        offset={[0, 3]}
        startColor={'#00000010'}
        style={styles.box}>
        <View>
          <Image source={transactionRoomImg} style={styles.iconImg} />
          {showStatusIcon && (
            <View style={styles.status}>
              <Text> </Text>
            </View>
          )}
        </View>
        <View>
          <View style={[g_styles.flex, g_styles.itemsStart]}>
            <Image
              source={AddressIcon}
              style={[g_styles.mr_8, g_styles.mt_5]}
            />
            <View>
              <Text style={styles.label}>12900 Oak Terrace Dr</Text>
              <Text style={styles.text}>San Antonio, TX, 79529</Text>
            </View>
          </View>

          <View style={[g_styles.flex, g_styles.itemsStart, g_styles.mt_10]}>
            <Image source={PriceIcon} style={[g_styles.mr_8, g_styles.mt_5]} />
            <View>
              <Text style={styles.label}>3,500,000</Text>
            </View>
          </View>

          <View style={[g_styles.flex, g_styles.itemsStart, g_styles.mt_10]}>
            <Image source={DayIcon} style={[g_styles.mr_8, g_styles.mt_5]} />
            <View>
              <Text style={styles.label}>Jan-19-2023, Thursday</Text>
            </View>
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default TransactionItem;
