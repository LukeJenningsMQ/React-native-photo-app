import { StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColours from '../configs/AppColours';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={22}/>}
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 20,
        padding: 5,
        width: '80%',
        marginTop: 5,
        backgroundColor: '#D3D3D3',
    },
    textInput:{
        width: '100%',
        marginLeft: 5,
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Avenir-Oblique'
    }
})
export default AppTextInput;