import React from 'react';
import {Image} from 'react-native';

const WhiteLogoIcon = require('./../../assets/images/white_logo.png');

const Logo = ({h, theme}) => {
  return <Image source={WhiteLogoIcon} style={{height: 70, width: 70}} />;
};

export default Logo;
