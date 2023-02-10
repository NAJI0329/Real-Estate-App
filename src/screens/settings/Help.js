import React from 'react';

import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import TopTitle from '../../components/TopTitle';
import HelpItem from '../../components/settings/HelpItem';
import g_styles from '../../ui/common/styles';

const Help = () => {
  return (
    <SafeAreaView style={g_styles.container}>
      <TopTitle title={'Help'} prevPath={'Settings'} closePath="SignIn" />
      <ScrollView>
        <View style={g_styles.box}>
          <HelpItem title="FAQ" link={'FAQ'} />
          <HelpItem title="Contact us" link={'ContactUs'} />
          <HelpItem title="Terms & Conditions" link={'TermsConditions'} />
          <HelpItem title="Privay Policy" link={'PrivayPolicy'} />
          <HelpItem title="About Us" link={'AboutUs'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({});
