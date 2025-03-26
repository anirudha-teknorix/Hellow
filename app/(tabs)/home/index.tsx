import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
      <Text>Home</Text>
      <Link href={'/home/dashboard'}>Go To Settings</Link>
      <Link href={'/list/5'}>List with 5</Link>
    </View>
  )
}

export default Home