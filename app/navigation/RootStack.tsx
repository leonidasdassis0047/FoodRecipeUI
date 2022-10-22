import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RecipeScreen} from '../screens';
import Tabs from './Tabs';
import type {RecipeItem} from '../utils/types';

export type RootStackParamList = {
  HomeNavigation: undefined;
  Login: undefined;
  Recipe: {recipe: RecipeItem};
};
const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNavigator.Screen name="Login" component={LoginScreen} />
      <RootStackNavigator.Screen name="HomeNavigation" component={Tabs} />
      <RootStackNavigator.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{animation: 'slide_from_right'}}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
