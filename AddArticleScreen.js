import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';

export default function AddArticleScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Fel', 'Artikelnamn måste fyllas i.');
      return;
    }

    const article = {
      name,
      quantity: parseInt(quantity) || 0,
      note,
    };

    route.params?.onSave?.(article);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Artikelnamn *</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Ex: 546 Light"
        style={styles.input}
      />

      <Text style={styles.label}>Antal kolli</Text>
      <TextInput
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        placeholder="Ex: 10"
        style={styles.input}
      />

      <Text style={styles.label}>Anteckning</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Ex: Till PK4"
        style={styles.input}
      />

      <Button title="SPARA" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
