/* eslint-disable global-require */
import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import NavOptions from '../components/homepage/NavOptions';
import ListBets from '../components/homepage/ListBets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NavOptions />
      <ListBets />
    </SafeAreaView>
  );
}

export default HomeScreen;
