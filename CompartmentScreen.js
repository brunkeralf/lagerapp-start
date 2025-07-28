import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function CompartmentScreen() {
  const [items, setItems] = useState([
    { id: '1', name: '546 Light', kolli: 5, note: 'Pall med ljus' },
    { id: '2', name: 'Nitrilhandskar', kolli: 2, note: 'Blå, strl L' }
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.name} ({item.kolli})</Text>
      <Text style={styles.note}>{item.note}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lada 3 – Fack 1</Text>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{ width: '100%' }}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>LÄGG TILL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20
  },
  item: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500'
  },
  note: {
    fontSize: 14,
    color: '#666'
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
