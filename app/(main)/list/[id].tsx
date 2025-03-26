import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

const DetailPage = () => {

    const { id } = useLocalSearchParams();

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
        <Stack.Screen options={{headerTitle: `Details #${id}`, headerBackButtonDisplayMode: 'minimal'}}/>
        <Text>My Details for: {id}</Text>
        <Text>List is pushed outside the Tab bar.</Text>
    </View>
  )
}

export default DetailPage