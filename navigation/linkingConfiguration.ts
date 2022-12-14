/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootTabParamList } from '../types';

const linking: LinkingOptions<RootTabParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Homepage: 'homepage',
      Stats: 'Stats',
      Articles: 'Articles',
      Bets: 'Bets',
      Settings: 'Settings',
    },
  },
};

export default linking;
