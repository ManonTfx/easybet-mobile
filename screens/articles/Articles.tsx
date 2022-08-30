/* eslint-disable global-require */
import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import ListArticles from '../../components/articles/ListArticles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
function Articles() {
  return (
    <SafeAreaView style={styles.container}>
      <ListArticles />
    </SafeAreaView>
  );
}

export default Articles;
