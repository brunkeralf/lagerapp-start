import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import WarehouseScreen from './WarehouseScreen';
import CompartmentScreen from './CompartmentScreen';
import AddArticleScreen from './AddArticleScreen';
import AdminScreen from './AdminScreen';
import RetrieveArticleScreen from './RetrieveArticleScreen'; // ← Ny!

const Stack = createStackNavigator();

export default function App() {
  const [articles, setArticles] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Warehouse" component={WarehouseScreen} />
        <Stack.Screen name="Compartment" component={CompartmentScreen} />
        <Stack.Screen name="AddArticle" component={AddArticleScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="RetrieveArticle" component={RetrieveArticleScreen} /> {/* ← Ny! */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
