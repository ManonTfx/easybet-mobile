/* eslint-disable global-require */
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
function Stats() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stats</Text>
    </SafeAreaView>
  );
}

export default Stats;
