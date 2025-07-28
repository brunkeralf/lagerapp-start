import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WarehouseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lada 3</Text>
      <Button
        title="Fack 1"
        onPress={() => navigation.navigate('Fack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
