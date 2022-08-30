/* eslint-disable global-require */
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import dateFormat from 'dateformat';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function HeaderLeft() {
  const now = dateFormat(new Date(), 'dddd dd mmmm yyyy');
  const styles = StyleSheet.create({
    text: {
      color: '#8790E0',
      fontSize: 30,
      fontWeight: 'bold',
    },
    date: {
      color: '#8790E0',
      fontSize: 13,
      marginTop: 5,
    },
  });

  return (
    <View style={tw`ml-2 mt-5`}>
      <Pressable>
        <Image source={require('../assets/images/logoHeader.png')} />
      </Pressable>

      <Text style={styles.date}>{now}</Text>
    </View>
  );
}
