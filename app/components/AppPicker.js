import {FlatList, Button,Modal, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColours from '../configs/AppColours';
import AppText from './AppText';
import AppButton from './AppButton';
import AppScreen from './AppScreen';
import AppListItem from './AppListItem';

function AppPicker({selectedItem, onSelectedItem, icon, data, placeholder, ...otherProps}) {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={22}/>}
      <AppText style={styles.textInput}>{selectedItem? selectedItem.label : placeholder}</AppText>
      <MaterialCommunityIcons name='chevron-down' size={22}/>
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
        <AppScreen> 
        <FlatList
            data = {data}
            keyExtractor = { item => item.value.toString()}
            renderItem = {({item}) =>
                <AppListItem 
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }} icon={item.icon} backgroundColor={AppColours.secondaryColour} title={item.label}/>}
            />   
            <AppButton title="Close" onPress={() => setModalVisible(false)}></AppButton>
        </AppScreen>
        </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 20,
        padding: 5,
        width: '80%',
        marginTop: 5,
        backgroundColor: '#D3D3D3',
    },
    textInput:{
        flex:1,
        width: '100%',
        marginLeft: 5,
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Avenir-Oblique'
    },
    text:{

    }

})
export default AppPicker;