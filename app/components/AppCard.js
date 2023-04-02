import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColours from '../configs/AppColours';
import AppText from './AppText';

function AppCard({title, subtitle, image, onSwipeLeft}) {
  return (

      <Swipeable renderRightActions={onSwipeLeft}>
       <View style={styles.container}>
           {isFinite(image) ? <Image source={image} style={styles.image}/>:<Image source={{uri: image}} style={styles.image}/>}
           <View style={styles.text}>
           <AppText style={styles.title}>{title}</AppText>
           <AppText style={styles.subtitle}>{subtitle}</AppText>     
           </View>
       </View>
       </Swipeable>
       
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:900,
        width:400,
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       marginBottom: 10,
       backgroundColor: AppColours.darkBlue,
    },
    text:{
        backgroundColor: AppColours.darkBlue,
    },
    title:{
        fontWeight:'bold',
        color: AppColours.white
    },
    subtitle:{
        color: AppColours.white
    },
    image:{
        flex:1,
        height:200,
        width:"100%"
    }
})
export default AppCard;