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

    // Här ska artikeln egentligen sparas i lagret eller skickas tillbaka
    console.log('Ny artikel:', { name, quantity, note });

    // Tillbaka till facket efter sparning
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Artikelnamn *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ange artikelnamn"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Antal kolli</Text>
      <TextInput
        style={styles.input}
        placeholder="Ange antal"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>Anteckning</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Valfri anteckning"
        multiline
        value={note}
        onChangeText={setNote}
      />

      <Button title="SPARA" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
});
