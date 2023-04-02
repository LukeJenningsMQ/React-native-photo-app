import { StyleSheet, Text, View, Platform} from 'react-native'
import React from 'react'

function AppText({children, style}) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Avenir-Oblique'
    }
})
export default AppText;