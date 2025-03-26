import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSession } from '../ctx';
import { router, Stack } from 'expo-router';

const otpVerify = () => {

    const { signIn } = useSession();
    
const handleLogin = () => {
        //Adicione sua lógica de login aqui
        signIn();
        //Antes de navegar, tenha certeza de que o usuário está autenticado
        router.replace('/home');
    };

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
        <Stack.Screen options={{headerTitle: `OTP`, headerBackButtonDisplayMode: 'minimal'}}/>
      <Text>otpVerify</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default otpVerify