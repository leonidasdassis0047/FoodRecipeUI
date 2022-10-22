import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {TabIcon} from '../components';
import {COLORS, icons} from '../constants';

import {HomeScreen} from '../screens';

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Bookmark: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          borderTopColor: COLORS.transparent,
          backgroundColor: COLORS.white,
          height: 80,
          elevation: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.home} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.search} />;
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.bookmark} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.settings} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
