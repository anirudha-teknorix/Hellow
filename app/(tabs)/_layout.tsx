import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

// If you doesn't want something to be shown in the tab bar than make href null.
const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{headerShown: false}}/>
        <Tabs.Screen name='list'/>
        <Tabs.Screen name='settings' options={{href: null}}/>
    </Tabs>
  )
}

export default _layout