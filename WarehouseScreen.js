import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function WarehouseScreen({ navigation }) {
  const warehouses = [
    { name: 'Lada 1', compartments: 15 },
    { name: 'Lada 2', compartments: 15 },
    { name: 'Lada 3', compartments: 15 },
    { name: 'Lada 4', compartments: 15 },
    { name: 'Lada 5', compartments: 15 },
    { name: 'Lada 6', compartments: 15 },
    { name: 'Lada 7', compartments: 15 },
    { name: 'Lada 8', compartments: 15 },
    { name: 'Lada 9', compartments: 15 },
    { name: 'Hyaberg', compartments: 6 },
    { name: 'Scania', compartments: 6 },
    { name: 'Nya ladan', compartments: 6 },
    { name: 'Nav 6–7', compartments: 1 },
    { name: 'Nav 8–9', compartments: 1 },
  ];

  return (
    <ScrollView style={styles.container}>
      {warehouses.map((warehouse, index) => (
        <TouchableOpacity
          key={index}
          style={styles.warehouseButton}
          onPress={() =>
            navigation.navigate('Compartment', {
              compartmentName: warehouse.name,
            })
          }
        >
          <Text style={styles.warehouseText}>{warehouse.name}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.bottomButtons}>
        <Button title="Bakåt" onPress={() => navigation.goBack()} />
        <Button title="Hem" onPress={() => navigation.navigate('Home')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  warehouseButton: {
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  warehouseText: {
    fontSize: 16,
  },
  bottomButtons: {
    marginTop: 30,
    gap: 10,
  },
});
