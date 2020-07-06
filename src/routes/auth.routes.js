import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Maps from '../pages/Maps';


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="Maps" component={Maps} />
  </AuthStack.Navigator>
);

export default AuthRoutes;