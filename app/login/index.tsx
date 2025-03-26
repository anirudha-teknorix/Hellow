import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSession } from '../ctx';
import { router, Stack } from 'expo-router';

const index = () => {

    const { signIn } = useSession();

    const handleLogin = () => {
        //Adicione sua lógica de login aqui
        signIn();
        //Antes de navegar, tenha certeza de que o usuário está autenticado
        router.push('/login/otp');
    };
    
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
      <Stack.Screen options={{headerTitle: `Sign In`, headerBackButtonDisplayMode: 'minimal'}}/>
      <Text>SignIn</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default index