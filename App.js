import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

  const Stack = createStackNavigator()

import CreateUser from './screens/CreateUser'
import UserList from './screens/UserList'
import UserDetails from './screens/UserDetails'

function MyStack() {
 
  return(
    <Stack.Navigator>
      <Stack.Screen name="Registro de Vendedores" component={CreateUser} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  )
}






export default function App() {
  return (
    <NavigationContainer>
     <MyStack />
    </NavigationContainer>
  );
}
