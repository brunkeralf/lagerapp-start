import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Sök lager" onPress={() => navigation.navigate('Search')} />
      <Button title="Gå till lager" onPress={() => navigation.navigate('Warehouse')} />
      <Button title="Inställningar/Admin" onPress={() => navigation.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
});
