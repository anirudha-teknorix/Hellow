import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

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
        <ThemedView style={{gap: 16}}>
            <ThemedText type='default'>This is default</ThemedText>
            <ThemedText type='title'>This is title</ThemedText>
            <ThemedText type='subtitle'>This is subtitle</ThemedText>
            <ThemedText type='defaultSemiBold'>This is defaultSemiBold</ThemedText>
            <ThemedText type='link'>This is link</ThemedText>
        </ThemedView>
    )
}

export default Index