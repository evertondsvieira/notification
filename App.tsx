import React from 'react';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  const [expoPushToken, setExpoPushToken] = React.useState<any>();

  async function registerForPushNotificationsAsync() {
    const { data } = await Notifications.getExpoPushTokenAsync({
      projectId: '36afa23f-8d38-4f90-afc3-8aa21281dc79',
    })
    setExpoPushToken(data)
  }

  React.useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{expoPushToken}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
