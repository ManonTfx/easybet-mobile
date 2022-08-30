import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import dateFormat from 'dateformat';
import HTML from 'react-native-render-html';
import { GetOneArticle_getArticleByID } from '../../API/types/GetOneArticle';

interface OneTaskProps {
  item: GetOneArticle_getArticleByID;
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#8790E0',
    borderRadius: 10,
  },
  text: {
    color: '#ffff',
  },
  image: {
    height: 300,
    width: '100%',
    borderColor: '#8790E0',
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
function OneArticle({ item }: OneTaskProps): JSX.Element {
  console.log(item.img);
  return (
    <View>
      <TouchableOpacity style={[styles.container, tw` p-5 border mt-3`]}>
        <View style={tw`flex-row w-full mb-2 justify-between`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={[tw`ml-2`, styles.text]}>{item.title}</Text>
          </View>
        </View>
        <Image
          style={[styles.image]}
          source={{
            uri: item.img,
          }}
        />
        <Text style={[tw`ml-2 mt-2`, styles.text]}>
          le {dateFormat(new Date(item.date), 'dd/mm/yy')}
        </Text>
        <HTML
          tagsStyles={{
            p: {
              color: 'white',
              textDecorationLine: 'none',
              fontSize: 13,
              fontFamily: 'Poppins-Regular',
            },
            div: {
              color: 'white',
              textDecorationLine: 'none',
              fontSize: 13,
              fontFamily: 'Poppins-Regular',
            },
          }}
          source={{ html: item.contents }}
          contentWidth={500}
        />
      </TouchableOpacity>
    </View>
  );
}
export default OneArticle;
