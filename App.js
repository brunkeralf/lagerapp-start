import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import WarehouseScreen from './WarehouseScreen';
import AdminScreen from './AdminScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Sök lager" component={SearchScreen} />
        <Stack.Screen name="Gå till lager" component={WarehouseScreen} />
        <Stack.Screen name="Inställningar/Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
