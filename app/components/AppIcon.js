import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColours from '../configs/AppColours';

function AppIcon({name, size=40, iconColor, backgroundColor}) {
  return (
    <View style={{width:size,height:size,backgroundColor,borderRadius:size/2,alignItems:'center',justifyContent:'center'}}>
      <MaterialCommunityIcons name={name} size={size*0.5} color={AppColours.white}/>
    </View>
  )
}

const styles = StyleSheet.create({})
export default AppIcon;