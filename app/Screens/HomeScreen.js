import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react'

import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

function HomeScreen({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Photos/Logo.png')}/>
      <AppButton title='Memory Collections' onPress={() => navigation.navigate("Memories")}></AppButton>
      <AppButton title='+ Add Memory' onPress={() => navigation.navigate("AddMemory")}></AppButton>
      <AppButton title='Log Out' onPress={() => navigation.navigate("Welcome")}></AppButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColours.primaryColour,
        alignItems: 'center',
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
        marginTop: 20,
        marginBottom: 25,
      },
})
export default HomeScreen;