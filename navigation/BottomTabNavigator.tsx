/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import React from 'react';
import { RootTabParamList } from '../types';
import HeaderLeft from './HeaderLeft';
import HomeScreen from '../screens/HomeScreen';
import { useUserFromStore } from '../store/slices/user.slice';
import BetsScreen from '../screens/bets/BetsScreen';
import Settings from '../screens/userSettings/Settings';
import Articles from '../screens/articles/Articles';
import Stats from '../screens/stats/Stats';

export default function BottomTabNavigator() {
  const { user } = useUserFromStore();
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  return (
    <BottomTab.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerBackground: () => (
          <View style={{ backgroundColor: '#15192C', flex: 1 }} />
        ),
        tabBarStyle: {
          position: 'absolute',
          zIndex: 20,
          height: '10%',
          paddingTop: 16,
          borderTopColor: '#8790E0',
          backgroundColor: '#15192C',
        },
        tabBarBackground: () => <View />,
      }}
    >
      <BottomTab.Screen
        name="Homepage"
        component={HomeScreen}
        options={{
          headerLeft: () => <HeaderLeft />,
          title: '',
          tabBarIcon: () => <Ionicons name="home" size={24} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        options={{
          headerLeft: () => <HeaderLeft />,
          title: '',
          tabBarIcon: () => (
            <Ionicons name="stats-chart-outline" size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Articles"
        component={Articles}
        options={{
          headerLeft: () => <HeaderLeft />,
          title: '',
          tabBarIcon: () => (
            <Ionicons name="book-outline" size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bets"
        component={BetsScreen}
        options={{
          headerLeft: () => <HeaderLeft />,
          title: '',
          tabBarIcon: () => (
            <Ionicons name="list-outline" size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ id: user.id }}
        options={{
          title: '',
          tabBarIcon: () => (
            <Ionicons name="settings-sharp" size={24} color="white" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
