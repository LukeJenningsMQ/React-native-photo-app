import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'


import AppText from './AppText'
import AppIcon from './AppIcon'
import AppColours from '../configs/AppColours'

function AppListItem({onPress, icon, title, iconColor, backgroundColor}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
       <AppIcon name={icon} backgroundColor={backgroundColor}/>
       <AppText style={styles.text}>{title}</AppText>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
        borderRadius: 20,
        padding: 5,
        width: '80%',
        marginTop: 5,
        backgroundColor: AppColours.secondaryColour
  },
  text:{
        flex:1,
        width: '100%',
        marginLeft: 5,
        fontSize:20,
        color: AppColours.white,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Avenir-Oblique'
  }
})
export default AppListItem;