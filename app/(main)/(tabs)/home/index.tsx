import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import { useSession } from '@/app/ctx';

const Home = () => {

  const { signOut, session } = useSession();

  if (session === null)
    return <Redirect href={'/login/signin'}/>

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
      <Text>Home</Text>
      <Link href={'/home/dashboard'}>Go To Settings</Link>
      <Link href={'/list/5'}>List with 5</Link>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

export default Home