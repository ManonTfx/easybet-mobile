import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';

import { useUserFromStore } from '../store/slices/user.slice';
import LogIn from '../screens/auth/Login';
import SignUp from '../screens/auth/Signup';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { user } = useUserFromStore();

  return (
    <Stack.Navigator>
      {user.logged ? (
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
