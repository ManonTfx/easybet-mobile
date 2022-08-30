/* eslint-disable global-require */
import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import ListBets from '../../components/bets/ListBets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
function BetsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ListBets />
    </SafeAreaView>
  );
}

export default BetsScreen;
