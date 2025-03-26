import { View, Text } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
      <Text>Dashboard</Text>
      <Text>This Dashboard is pushed inside the Tab bar.</Text>
    </View>
  )
}

export default Dashboard