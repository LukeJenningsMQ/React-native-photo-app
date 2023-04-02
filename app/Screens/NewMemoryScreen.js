import {Text, View, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'

import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';
import AppPicker from '../components/AppPicker';

import { Formik } from 'formik';
import * as Yup from 'yup';
import DataManager from '../configs/DataManager';



const collections = [
  {icon:'sunglasses',label:'Holidays', value:1},
  {icon:'airballoon',label:'Outdoor', value:2},
  {icon:'book-open-variant',label:'School', value:3},
  {icon:'pine-tree',label:'Christmas', value:4},
  {icon:'moon-waning-crescent',label:'Night Out', value:5},
  {icon:'white-balance-sunny',label:'Day Out', value:6},
  {icon:'home',label:'Indoor', value:7},
]

function NewMemoryScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [collection, setCollection] = useState('');
  const [titleError, settitleError] = useState('');
  const [subtitleError, setSubtitleError] = useState('');
  const [catError, setCatError] = useState('');
  const [image, setImage] = useState(null);
  const[imageError, setImageError] = useState('');
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }
    setImage({path: pickerResult.assets[0].uri})
  }
  
  const doErrorCheck = () => {
    settitleError(title.length>0 ? '':"Please set valid title");
    setSubtitleError(subtitle.length>0?'':"Please input valid description");
    setCatError(collection?"":"Please select colletion")
    setImageError(image?"":"Please pick an image")
    return ((title.length>0) && (subtitle.length>0) && (collection) && image?true:false)
  }

  const addMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    const memories = commonData.getMemoryID(user);
    const memoryID = Math.floor(Math.random() * 50000) + 1 ;
    const newMemory = {
            userid: user,
            id:memoryID,
            title:title,
            subtitle:subtitle,
            image: image.path,
            collection:collection.label
    }
    commonData.addMemory(newMemory);
  
  }
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Photos/Logo.png')}/>
      <AppPicker selectedItem = {collection} onSelectedItem={item=>setCollection(item)} data={collections} icon='apps' placeholder='Collections'></AppPicker>
      {catError.length > 0 ? <AppText>{catError}</AppText>:<></>}  
      <AppTextInput placeholder="Title" value={title} onChangeText={(inputText) => setTitle(inputText)}/>
      {titleError.length > 0 ? <AppText>{titleError}</AppText>:<></>}
      <AppTextInput placeholder="Description" value={subtitle} onChangeText={(inputText) => setSubtitle(inputText)}/>
      {subtitleError.length > 0 ? <AppText>{subtitleError}</AppText>:<></>}
      <AppButton title='Select Image' onPress={openImagePickerAsync}></AppButton>
      {image && <Image  source={{uri: image.path}} style={{height:100,width:100}}/>}
      {imageError.length > 0 ? <AppText>{imageError}</AppText>:<></>}
      <AppButton title="+ Add" onPress={() => {
        if(doErrorCheck()){
          addMemory();
          navigation.navigate('Memories');
        }
      }}></AppButton>
      <AppButton title='back' onPress={() => navigation.navigate("Home")}></AppButton>
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
        alignSelf:'center'
      },
})
export default NewMemoryScreen;