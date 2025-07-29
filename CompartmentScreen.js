// Uppdaterad CompartmentScreen.js med stöd för SPÄRR import React, { useState } from 'react'; import { View, Text, Button, FlatList, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function CompartmentScreen({ route }) { const { compartmentName } = route.params; const [articles, setArticles] = useState([]); const [modalVisible, setModalVisible] = useState(false); const [selectedArticleIndex, setSelectedArticleIndex] = useState(null); const [blockQuantity, setBlockQuantity] = useState(''); const [blockNote, setBlockNote] = useState('');

const handleAddArticle = (article) => { setArticles([...articles, { ...article, blocked: 0, blockNote: '' }]); };

const updateBlocked = () => { const updated = [...articles]; const qty = parseInt(blockQuantity); updated[selectedArticleIndex].blocked = isNaN(qty) ? 0 : qty; updated[selectedArticleIndex].blockNote = blockNote; setArticles(updated); setModalVisible(false); setBlockQuantity(''); setBlockNote(''); };

const renderArticle = ({ item, index }) => ( <TouchableOpacity style={styles.articleButton} onPress={() => { setSelectedArticleIndex(index); setBlockQuantity(item.blocked?.toString() || ''); setBlockNote(item.blockNote || ''); setModalVisible(true); }}> <Text style={styles.articleText}>{item.name} - Totalt: {item.quantity} (Spärrade: {item.blocked || 0})</Text> </TouchableOpacity> );

return ( <View style={styles.container}> <Text style={styles.title}>{compartmentName}</Text> <FlatList data={articles} renderItem={renderArticle} keyExtractor={(item, index) => index.toString()} /> <Button title="LÄGG TILL" onPress={() => { // Mockad artikel för demo – byt till navigation vid behov handleAddArticle({ name: 'Ny artikel', quantity: 10 }); }} />

<Modal visible={modalVisible} animationType="slide" transparent={true}>
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Spärra kolli</Text>
        <TextInput
          placeholder="Antal att spärra"
          keyboardType="numeric"
          value={blockQuantity}
          onChangeText={setBlockQuantity}
          style={styles.input}
        />
        <TextInput
          placeholder="Anteckning (valfri)"
          value={blockNote}
          onChangeText={setBlockNote}
          style={styles.input}
        />
        <Button title="SPÄRRA" onPress={updateBlocked} />
        <Button title="AVBRYT" onPress={() => setModalVisible(false)} color="grey" />
      </View>
    </View>
  </Modal>
</View>

); }

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }, articleButton: { backgroundColor: '#eee', padding: 15, marginBottom: 10, borderRadius: 10, }, articleText: { fontSize: 16 }, modalBackground: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }, modalContainer: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10, }, modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }, input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10, }, });

