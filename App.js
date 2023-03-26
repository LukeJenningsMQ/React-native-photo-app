import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, Text, View, SafeAreaView, Linking, TouchableHighlight, Image, TouchableOpacity, TextInputBase} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import WelcomeScreen from './app/Screens/WelcomeScreen';
import LogInScreen from './app/Screens/LogInScreen';
import RegisterScreen from './app/Screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer><AuthNavigator/></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
