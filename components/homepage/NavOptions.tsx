/* eslint-disable global-require */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    height: '39%',
    marginTop: 5,
  },
  card: {
    height: '100%',
    padding: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: '#8790E0',
    marginHorizontal: 12,
    borderRadius: 10,
  },
  text: {
    color: '#8790E0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    padding: 5,
    borderRadius: 100,
    width: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#8790E0',
  },
  image: {
    height: '70%',
  },
});
export default function NavOptions() {
  const navigation = useNavigation();
  return (
    <View style={[tw`flex flex-row `, styles.container]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Bets')}
        style={styles.card}
      >
        <Text style={styles.text}>Liste des paris</Text>
        <Image
          style={[tw`w-36`, styles.image]}
          source={require('../../assets/images/bets.png')}
        />
        <Icon
          style={styles.icon}
          name="arrowright"
          tvParallaxProperties
          color="#8790E0"
          type="antdesign"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Stats')}
        style={styles.card}
      >
        <Text style={styles.text}>Statistiques</Text>
        <Image
          style={[tw`w-36`, styles.image]}
          source={require('../../assets/images/stats.png')}
        />
        <Icon
          style={styles.icon}
          name="arrowright"
          tvParallaxProperties
          color="#8790E0"
          type="antdesign"
        />
      </TouchableOpacity>
    </View>
  );
}
