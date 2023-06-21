import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Snackbar from 'react-native-snackbar';
const SnackbarUI = () => {
  function showSnackbar() {
    Snackbar.show({
      text: 'Data berhasil ditampilkan',
      duration: Snackbar.LENGTH_INDEFINITE,
      backgroundColor: 'crimson',
      action: {
        text: 'OK',
        textColor: 'black',
        onPress: () => {
          /* Do something. */
          undo();
        },
      },
      textColor: 'black',
    });
  }

  function undo() {
    console.log('berhasil di tampil di konsol');
  }

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => showSnackbar()}>
        <Text>Klik SnackBar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SnackbarUI;
