import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';

function WelcomeScreen({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Photos/Logo.png')}/>
      <AppButton title='Login' onPress={() => navigation.navigate("LogIn")}></AppButton>
      <AppButton title='Register' onPress={() => navigation.navigate("Register")}></AppButton>
      
    </AppScreen>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColours.primaryColour,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontSize: 40,
        color: 'red',
        fontWeight: 'bold',
        fontStyle:'italic',
      },
      logo:{
        height:255,
        width: 220,
        marginBottom: 25,
      },
})
export default WelcomeScreen;