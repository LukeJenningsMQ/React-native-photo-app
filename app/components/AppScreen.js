import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

import AppColours from '../configs/AppColours'

function AppScreen({children, style}) {
  return (
        <SafeAreaView style={[styles.screen, style]}>
          <View>
             {children}
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: Constants.statusBarHeight,
        flex:1,
    }
})
export default AppScreen;