import {TouchableOpacity,FlatList, Text, View, StyleSheet, Image} from 'react-native';
import React, { useState, Component } from 'react';
import {useNavigation} from '@react-navigation/native';

import AppPicker from '../components/AppPicker';
import AppIcon from '../components/AppIcon';
import AppColours from '../configs/AppColours';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';
import DataManager from '../configs/DataManager';


//These will be used for filtering which type of photots the user wnts
const collections = [
  {icon:'apps', label:'All', value:1},
  {icon:'sunglasses',label:'Holidays', value:2},
  {icon:'airballoon',label:'Outdoor', value:3},
  {icon:'book-open-variant',label:'School', value:4},
  {icon:'pine-tree',label:'Christmas', value:5},
  {icon:'moon-waning-crescent',label:'Night Out', value:6},
  {icon:'white-balance-sunny',label:'Day Out', value:7},
  {icon:'home',label:'Indoor', value:8},
]

//get all memories for a particular suer
const getMemories = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getMemoryID(user);
}
//get Memories depending on category
const getMemoriesCollection = (category) => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  if(category.label === ''){
    return commonData.getMemoryID(user);
  }
  if(category.label === 'All'){
    return commonData.getMemoryID(user);
  } else{
  return commonData.getMemoryCat(user,category.label);
  }
}

function MemoriesScreen({navigation}) {
  const [memoryList, setMemoryList] = useState(getMemories());
  const [refreshing, setRefreshing] = useState(false);
  const [collection, setCollection] = useState('');
  const handleDelete = (Memory) => {
    let commonData = DataManager.getInstance();
    commonData.handleDelete(Memory);
    setMemoryList(getMemoriesCollection(collection));
  }
  let commonData = DataManager.getInstance();
  return (
    <AppScreen style={styles.container}>
        <AppPicker selectedItem = {collection} onSelectedItem={item=> {setCollection(item); setMemoryList(getMemoriesCollection(item))}} data={collections} icon='apps' placeholder='Collections'></AppPicker>
        <FlatList
            data = {memoryList}
            keyExtractor = { Memory => Memory.id.toString()}
            refreshing = {refreshing}
            onRefresh = {() => memoryList = getMemories()}
            renderItem = {({item}) =>
                <AppCard title={item.title} subtitle={item.subtitle} image={item.image}
                //Swipe left to get options for deleting a photo
                onSwipeLeft={ () => (<View style={styles.deleteView}><TouchableOpacity onPress={() => handleDelete(item)}><AppIcon name='trash-can' backgroundColor={AppColours.secondaryColour}/></TouchableOpacity></View>)}/>}
        />
        <AppButton title='back' onPress={() => navigation.navigate("Home")}></AppButton>
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
      deleteView:{
        width:75,
        backgroundColor: AppColours.primaryColour,
        justifyContent:'center',
        alignItems:'center'
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
export default MemoriesScreen;