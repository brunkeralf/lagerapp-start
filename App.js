import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ title: 'LagerApp Start' }} />
        <Stack.Screen name="Sök" component={SearchScreen} />
        <Stack.Screen name="Lager" component={LagerScreen} />
        <Stack.Screen name="Inställningar" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sök')}>
        <Text style={styles.buttonText}>Sök lager</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lager')}>
        <Text style={styles.buttonText}>Gå till lager</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inställningar')}>
        <Text style={styles.buttonText}>Inställningar / Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sida: Sök lager</Text>
    </View>
  );
}

function LagerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sida: Gå till lager</Text>
    </View>
  );
}

function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sida: Inställningar/Admin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
