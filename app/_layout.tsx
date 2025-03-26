import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { SessionProvider } from './ctx';

const StackLayout = () => {
  // return (
  //   <Stack>
  //     <Stack.Screen name='(tabs)' options={{headerShown: false, headerBackButtonDisplayMode: 'minimal'}}/>
  //   </Stack>
  // )

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}

export default StackLayout