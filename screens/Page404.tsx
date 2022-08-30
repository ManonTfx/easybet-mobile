import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

function Page404() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15192C',
      }}
    >
      <Image
        style={[tw`w-9/12`, { height: 200 }]}
        source={require('../assets/images/notfound.png')}
      />
      <Text style={tw`text-white mt-5 text-3xl font-bold`}>
        PERDU DANS L&nbsp;ESPACE
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Homepage')}
        style={[tw`px-7 mt-5 py-3 rounded-md`, { backgroundColor: '#8790E0' }]}
      >
        <Text style={tw`text-white font-bold`}>Retour à l&nbsp;ccueil</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Page404;
