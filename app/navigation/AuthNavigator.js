import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen.js';
import LogInScreen from '../Screens/LogInScreen.js';
import RegisterScreen from '../Screens/RegisterScreen.js';
import MemoriesScreen from '../Screens/MemoriesScreen.js';
import HomeScreen from '../Screens/HomeScreen.js';
import NewMemoryScreen from '../Screens/NewMemoryScreen';

const AppStack = createStackNavigator();
const  AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='AddMemory' component={NewMemoryScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='LogIn' component={LogInScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='Memories' component={MemoriesScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)
export default AuthNavigator;