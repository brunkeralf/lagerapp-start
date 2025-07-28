import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CompartmentScreen({ navigation, route }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (route.params?.newArticle) {
      setArticles(prev => [...prev, route.params.newArticle]);
    }
  }, [route.params?.newArticle]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Artiklar i facket</Text>
      <ScrollView style={{ flex: 1 }}>
        {articles.map((article, index) => (
          <TouchableOpacity key={index} style={styles.articleButton}>
            <Text style={styles.articleText}>{article.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button
        title="LÄGG TILL"
        onPress={() => navigation.navigate('Lägg till artikel')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  articleButton: {
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  articleText: { fontSize: 16 },
});
