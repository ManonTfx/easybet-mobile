import { useMutation } from '@apollo/client';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
  Alert,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { LOGIN_MUTATION } from '../../API/mutation/login';
import InputAuth from '../../components/form/InputAuth';
import { useUserFromStore } from '../../store/slices/user.slice';
import { RootStackParamList } from '../../types';
import { Login, LoginVariables } from '../../API/types/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15192C',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#8790E0',
    shadowColor: '#8790E0',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.2,
    shadowRadius: 11.95,
    elevation: 18,
  },
});

type SignupScreenProps = StackNavigationProp<RootStackParamList, 'Signup'>;

function LogIn() {
  const { handleSubmit, control } = useForm();
  const { dispatchLogin } = useUserFromStore();
  const navigation = useNavigation<SignupScreenProps>();
  const [loginMutation, { error }] = useMutation<Login, LoginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: async (data: Login) => {
        await SecureStore.setItemAsync('token', data.login.token);
        dispatchLogin(data.login);
      },
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    Keyboard.dismiss();
    loginMutation({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  if (error) {
    Alert.alert(
      'Oups !',
      "L'adresse mail ou le mot de passe saisi est incorrect",
      [
        {
          text: 'Fermer',
          style: 'cancel',
        },
        { text: 'OK' },
      ]
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tw`w-full flex flex-col items-center`}>
        <Image
          style={tw`h-40 w-60 mt-14 mb-6 mt-16 ml-2`}
          source={require('../../assets/images/logo.png')}
        />
        <View style={tw`w-11/12`}>
          <InputAuth
            control={control}
            label="Email"
            name="email"
            type="email"
          />
        </View>
        <View style={tw`w-11/12`}>
          <InputAuth
            control={control}
            label="Mot de passe"
            name="password"
            type="password"
          />
        </View>
        <Pressable
          style={[tw`mt-5 w-11/12 py-3 rounded-md`, styles.button]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>
            Se connecter
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={tw`text-white mt-2`}>
            Pas encore de compte ? Inscrit toi.
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
export default LogIn;
