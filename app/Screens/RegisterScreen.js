import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import { Formik } from 'formik';

import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import DataManager from '../configs/DataManager';

const schema = Yup.object().shape(
  {
    user:  Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(8).label("Password"),
  }
);

const validateUser = ({email,password}) => {
  let commonData = DataManager.getInstance();
  let list = commonData.getAllUsers();
  return(
    list.filter((user) => user.email === email).length > 0
  );
};

function RegisterScreen({navigation}) {
  
  const addUser = ({user,email,password}) => {
    let commonData = DataManager.getInstance();
    const userList = commonData.getAllUsers();
    const userID = userList.length+1;
    const newUser = {
            id: userID,
            name:user,
            email:email,
            password:password,
    }
    commonData.addUser(newUser); 
  }
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Photos/Logo.png')}/>
      <Formik
        initialValues={{user:'',email:'',password:''}}
        onSubmit = {(values, {resetForm})=> {
          if(validateUser(values)){
            resetForm();
            alert("Account Already Created For This Email")
          }
          else {
            addUser(values)
            console.log(values);
            resetForm();
            navigation.navigate("LogIn");
          }
            
        }}
        validationSchema ={schema}>
        {({values, handleChange, handleSubmit,errors,setFieldTouched,touched})=>(

          <>
          <View style={styles.container}>
        <AppTextInput 
        autoCapitalize='none'
        autoCorrect={false}
        icon='head' 
        placeholder='Name'
        keyboardType='email-address'
        value={values.user}
        onBlur={()=>setFieldTouched}
        onChangeText={handleChange("user")}
      />
               {touched.user && <AppText style={{color:'#FF0000', fontSize:15}}>{errors.user}</AppText>}
 
                  <AppTextInput 
            autoCapitalize='none'
            autoCorrect={false}
            icon='email' 
            placeholder='Email Address'
            keyboardType='email-address'
            textContentType='emailAddress'
            value={values.email}
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
          value={values.password}
          onBlur={()=>setFieldTouched}
          onChangeText={handleChange("password")}
          />    
          {touched.password && <AppText style={{color:'#FF0000', fontSize:15}}>{errors.password}</AppText>}
      <AppButton title='Register' onPress={handleSubmit}></AppButton>
          </View>
          
          </>
        )
      }
      </Formik> 
      <AppButton title='back' onPress={() => navigation.navigate("Welcome")}></AppButton>
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
        alignSelf:'center',
        width: 220,
        marginTop: 20,
        marginBottom: 25,
      },
})
export default RegisterScreen;