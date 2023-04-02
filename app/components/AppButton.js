import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import AppColours from '../configs/AppColours'

function AppButton({title,onPress}) {
  return (
  <TouchableOpacity onPress={onPress}>  
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: AppColours.secondaryColour,
    borderRadius: 50,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 5,
  },
  text:{
    color: AppColours.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})
export default AppButton;