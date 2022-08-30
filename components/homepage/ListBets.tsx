import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import { Text } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Error from '../Error';
import Loader from '../Loader';
import { GET_ALL_BETS } from '../../API/queries/bets';
import OneBet from '../bets/OneBet';

const styles = StyleSheet.create({
  container: {
    height: '44%',
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

export default function ListBets() {
  const { loading, error, data } = useQuery(GET_ALL_BETS);

  if (loading)
    return (
      <View
        style={{
          height: '44%',
          width: '100%',
          marginTop: 20,
          borderTopWidth: 1,
          borderTopColor: '#8790E0',
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
      <Text style={tw`text-white mt-2 font-bold`}>Derniers paris : </Text>
      <FlatList
        data={[...data.getAllBets]}
        keyExtractor={(bet) => bet.id}
        renderItem={({ item }) => <OneBet item={item} />}
      />
    </View>
  );
}
