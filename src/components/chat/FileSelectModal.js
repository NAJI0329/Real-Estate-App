import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import FileSelectItem from './FileSelectItem';

const fileImg = require('./../../../assets/images/file.png');
const docusignImg = require('./../../../assets/images/docusign.png');
const photoImg = require('./../../../assets/images/photo.png');
const cameraImg = require('./../../../assets/images/camera.png');

const FileSelectModal = () => {
  const menus = [
    {name: 'Files', image: fileImg, path: 'UploadFiles'},
    {name: 'DocuSign', image: docusignImg, path: 'ScanDocument'},
    {name: 'Photos', image: photoImg},
    {name: 'Camera', image: cameraImg},
  ];

  return (
    <View>
      {menus.map((row, key) => {
        return <FileSelectItem row={row} key={key} />;
      })}
    </View>
  );
};

export default FileSelectModal;

const styles = StyleSheet.create({});
