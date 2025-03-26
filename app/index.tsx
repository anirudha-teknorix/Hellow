import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const showTabs = true;

const Index = () => {
    if (showTabs)
    {
        // If you want to see home as first page.
        // In the below href we can use /(tabs)/home or /home, it's one and the same
        // Since tabls is grouped we can directly use /home.
        return <Redirect href='/home'/>
    }  

    // If you want to see Index as first page.
    return (
        <SafeAreaView>
            <Text>Index</Text>
        </SafeAreaView>
    )
}

export default Index