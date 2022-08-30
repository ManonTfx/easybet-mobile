import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import Error from '../Error';
import Loader from '../Loader';
import { GET_ALL_ARTICLES } from '../../API/queries/articles';
import OneArticle from './OneArticles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#8790E0',
  },
  text: {
    color: '#8790E0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default function ListArticles() {
  // FETCH THE ARTICLES LIST
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES);

  if (loading)
    return (
      <View
        style={{
          height: '44%',
          width: '100%',
          marginTop: 20,
        }}
      >
        <Loader />
      </View>
    );

  if (error || !data)
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={[...data.getAllArticles]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OneArticle item={item} />}
      />
    </View>
  );
}
