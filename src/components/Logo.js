import React from 'react';
import {Image} from 'react-native';

const LogoIcon = require('./../../assets/images/logo/logo.png');

const Logo = ({h, theme}) => {
  return <Image source={LogoIcon} />;
};

export default Logo;
