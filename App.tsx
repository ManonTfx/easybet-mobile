import React from 'react';
import * as Notifications from 'expo-notifications';
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import client from './API/client';
import useColorScheme from './hooks/useColorSchema';
import { store } from './store/store';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function App() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Navigation colorScheme={colorScheme} />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
