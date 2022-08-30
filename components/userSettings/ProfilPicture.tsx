import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GetUserById } from '../../API/types/GetUserById';

interface IProps {
  user: GetUserById;
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8790E0',
  },
  defaultAvatar: {
    backgroundColor: '#8790E0',
  },
  letter: {
    fontSize: 50,
  },
});

export default function ProfilPicture({ user }: IProps) {
  const letter = user.getUserByID.firstName.split('')[0];

  return (
    <View>
      <View style={tw`relative`}>
        <View
          style={[
            tw`h-20 w-20  rounded-full flex items-center justify-center`,
            styles.defaultAvatar,
          ]}
        >
          <Text style={[tw`text-white`, styles.letter]}>{letter}</Text>
        </View>
      </View>
    </View>
  );
}
