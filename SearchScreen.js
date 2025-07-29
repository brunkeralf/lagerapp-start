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
        placeholder
