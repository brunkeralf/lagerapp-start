import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function CompartmentScreen() {
  const [articles, setArticles] = useState([
    { id: '1', name: '546 Light', quantity: 4 },
    { id: '2', name: 'Skruv M8', quantity: 10 },
  ]);

  const addArticle = () => {
    // Här lägger vi till ny artikel – just nu hårdkodat som exempel
    const newId = (articles.length + 1).toString();
    const newArticle = { id: newId, name: `Artikel ${newId}`, quantity: 1 };
    setArticles([...articles, newArticle]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fack 1 – Innehåll</Text>

      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.article}>
            <Text style={styles.articleText}>{item.name} – {item.quantity} kolli</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.addButton}>
        <Button title="LÄGG TILL" onPress={addArticle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  article: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleText: { fontSize: 16 },
  addButton: { marginTop: 20 },
});
