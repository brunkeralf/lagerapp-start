import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const mockData = [
    { name: '546 Light', note: 'Till Coralli' },
    { name: 'Bolt 12mm', note: 'Skruv till PK4' },
    { name: 'Rörkoppling', note: 'Används i Nav 6–7' },
  ];

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = mockData.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.note.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Sök efter artikel eller anteckning"
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
            <Text style={styles.noteText}>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 14,
    color: 'gray',
  },
});
