import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import tw from 'tailwind-react-native-classnames';
import dateFormat from 'dateformat';
import Error from '../Error';
import { GetBetByID_getBetByID } from '../../API/types/GetBetByID';
import { GET_ONE_BET } from '../../API/queries/bets';

interface OneTaskProps {
  item: GetBetByID_getBetByID;
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#8790E0',
    borderRadius: 10,
  },
  text: {
    color: '#ffff',
  },
  advancementDone: {
    backgroundColor: '#2C9E7C',
  },
  advancementTodo: {
    backgroundColor: '#2B8AD1',
  },
  advancementInProgress: {
    backgroundColor: '#E4AC65',
  },
});

function OneBet({ item }: OneTaskProps): JSX.Element {
  //   const navigation = useNavigation();

  const srcImg = (): JSX.Element => {
    let src = (
      <Image
        style={[tw`w-5 h-5`]}
        source={require('../../assets/images/lambdaCat.png')}
      />
    );
    switch (item.category.toLowerCase()) {
      case 'football':
        src = (
          <Image
            style={[tw`w-5 h-5`]}
            source={require('../../assets/images/football.png')}
          />
        );
        break;
      case 'tennis':
        src = (
          <Image
            style={[tw`w-5 h-5`]}
            source={require('../../assets/images/tennis.png')}
          />
        );
        break;
      case 'basketball':
        src = (
          <Image
            style={[tw`w-5 h-5`]}
            source={require('../../assets/images/basket.png')}
          />
        );
        break;
      default:
    }
    return src;
  };

  const { error, data } = useQuery(GET_ONE_BET, {
    variables: {
      getBetByIdId: item.id,
    },
  });
  if (error || !data) {
    return <Error />;
  }
  return (
    <View>
      <TouchableOpacity style={[styles.container, tw` p-5 border mt-3`]}>
        <View style={tw`flex-row w-full mb-2 justify-between`}>
          <View style={tw`flex-row justify-between items-center`}>
            {srcImg()}
            <Text style={[tw`ml-2`, styles.text]}>{item.name}</Text>
          </View>
        </View>
        <View style={tw`flex-row flex`}>
          <Text style={[tw`font-bold`, styles.text]}>{item.category}</Text>
          <Text style={[tw`ml-2`, styles.text]}>
            le {dateFormat(new Date(item.date), 'dd/mm/yy')}
          </Text>
        </View>
        <View style={tw`flex-row flex mt-2 items-center`}>
          <View style={tw`bg-gray-500 p-1 rounded-full`}>
            <Text style={[tw`font-bold`, styles.text]}>{item.stake}/10</Text>
          </View>
          <View style={tw`bg-yellow-600 p-1 rounded-full ml-2`}>
            <Text style={[tw`font-bold`, styles.text]}>{item.bookmaker}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default OneBet;
