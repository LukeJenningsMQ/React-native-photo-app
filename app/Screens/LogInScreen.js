import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react'

import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';
import DataManager from '../configs/DataManager';

import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape(
  {
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(8).label("Password"),
  }
);


const validateUser = ({email,password}) => {
  let commonData = DataManager.getInstance();
  let list = commonData.getAllUsers();
  return(
    list.filter((user) => user.email === email && user.password === password).length > 0
  );
};

const getUser = ({email}) => {
  let commonData = DataManager.getInstance();
  let list = commonData.getAllUsers();
  return list.find((user) => user.email === email)
}

const createUser = ({email}) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({email}).id;
  commonData.setUserID(userID);
}

function LogInScreen({navigation}) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.Image}>
      <Image style={styles.logo} source={require('../assets/Photos/Logo.png')}/>
      </View>
      <Formik
        initialValues={{email:'',password:'',}}
        onSubmit = {(values, {resetForm})=> {
          if(validateUser(values)){
            console.log(values);
            createUser(values);
            resetForm();
            navigation.navigate("Home")
          }
          else {
            resetForm();
            alert("Invalid Login Details")
          }
            
        }}
        validationSchema ={schema}>
        {({values,handleChange, handleSubmit,errors,setFieldTouched,touched})=>(

          <>
            <View style={styles.container}>
            <AppTextInput 
            autoCapitalize='none'
            autoCorrect={false}
            icon='email' 
            placeholder='Email Address'
            keyboardType='email-address'
            textContentType='emailAddress'
            value = {values.email}
            onBlur={()=>setFieldTouched}
            onChangeText={handleChange("email")}
            />
          {touched.email && <AppText style={{color:'#FF0000', fontSize:15}}>{errors.email}</AppText>}
          <AppTextInput 
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock' 
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          value = {values.password}
          onBlur={()=>setFieldTouched}
          onChangeText={handleChange("password")}
          />    
          {touched.password && <AppText style={{color:'#FF0000', fontSize:15}}>{errors.password}</AppText>}
          <AppButton title='Login' onPress={handleSubmit}></AppButton>
          </View>
        </>
      )}
      </Formik>
      
      <AppButton title='back' onPress={() => navigation.navigate("Welcome")}></AppButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColours.primaryColour,
        alignItems:'center',
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
        alignSelf:'center'
      },
      image:{
      }
})
export default LogInScreen;