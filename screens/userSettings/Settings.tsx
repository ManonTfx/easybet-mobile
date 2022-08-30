import { useQuery } from '@apollo/client';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GET_USER_BY_ID } from '../../API/queries/user';
import { GetUserById } from '../../API/types/GetUserById';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: -20,
  },
});

type RootStackParam = {
  id: { id: string };
};
function Settings() {
  const route = useRoute<RouteProp<RootStackParam>>();
  const { id } = route.params;

  const {
    data: user,
    loading,
    error,
  } = useQuery<GetUserById>(GET_USER_BY_ID, {
    variables: { getUserByIdId: id },
  });

  if (loading) {
    return <Text>loading</Text>;
  }
  if (error || !user) {
    return <Text>error</Text>;
  }

  return (
    <View style={[styles.container, tw`w-full`]}>
      <View style={tw`w-full flex flex-row items-center mt-2`}>
        <View style={tw`flex flex-col ml-2`}>
          <View style={tw`text-white flex flex-row mt-5`}>
            <Text style={tw`text-white font-bold text-xl mr-1`}>
              {user.getUserByID.firstName.charAt(0).toUpperCase() +
                user.getUserByID.firstName.substr(1)}
            </Text>
            <Text style={tw`text-white font-bold text-xl`}>
              {user.getUserByID.lastName.charAt(0).toUpperCase() +
                user.getUserByID.lastName.substr(1)}
            </Text>
          </View>
          <Text style={tw`text-white text-xl opacity-80`}>
            {user.getUserByID.email}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Settings;
