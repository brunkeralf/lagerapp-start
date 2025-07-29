import React, { useState, useEffect } from 'react'; import { View, Text, Button, FlatList, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native'; import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompartmentScreen({ route, navigation }) { const { compartmentName } = route.params; const [articles, setArticles] = useState([]); const [modalVisible, setModalVisible] = useState(false); const [selectedArticleIndex, setSelectedArticleIndex] = useState(null); const [blockQuantity, setBlockQuantity] = useState(''); const [blockNote, setBlockNote] = useState('');

useEffect(() => { loadArticles(); }, []);

useEffect(() => { saveArticles(); }, [articles]);

const loadArticles = async () => { try { const saved = await AsyncStorage.getItem(compartmentName); if (saved) setArticles(JSON.parse(saved)); } catch (e) { console.error('Kunde inte läsa artiklar:', e); } };

const saveArticles = async () => { try { await AsyncStorage.setItem(compartmentName, JSON.stringify(articles)); } catch (e) { console.error('Kunde inte spara artiklar:', e); } };

const handleAddArticle = () => { navigation.navigate('AddArticle', { onSave: (newArticle) => { setArticles([...articles, { ...newArticle, blocked: 0, blockNote: '' }]); }, }); };

const goToRetrieve = () => { navigation.navigate('RetrieveArticle', { articles, setArticles, compartmentName, }); };

const updateBlocked = () => { const updated = [...articles]; const qty = parseInt(blockQuantity); updated[selectedArticleIndex].blocked = isNaN(qty) ? 0 : qty; updated[selectedArticleIndex].blockNote = blockNote; setArticles(updated); setModalVisible(false); setBlockQuantity(''); setBlockNote(''); };

const renderArticle = ({ item, index }) => ( <TouchableOpacity style={styles.articleButton} onPress={() => { setSelectedArticleIndex(index); setBlockQuantity(item.blocked?.toString() || ''); setBlockNote(item.blockNote || ''); setModalVisible(true); }}> <Text style={styles.articleText}> {item.name} - Totalt: {item.quantity} (Spärrade: {item.blocked || 0}) </Text> {item.blockNote ? <Text style={styles.noteText}>🔒 {item.blockNote}</Text> : null} </TouchableOpacity> );

return ( <View style={styles.container}> <Text style={styles.title}>{compartmentName}</Text> <FlatList data={articles} renderItem={renderArticle} keyExtractor={(item, index) => index.toString()} />

<View style={styles.buttonRow}>
    <Button title="LÄGG TILL" onPress={handleAddArticle} />
    <Button title="UT" onPress={goToRetrieve} color="orange" />
  </View>

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

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }, articleButton: { backgroundColor: '#eee', padding: 15, marginBottom: 10, borderRadius: 10, }, articleText: { fontSize: 16 }, noteText: { fontSize: 14, color: 'grey', marginTop: 5 }, buttonRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 20, }, modalBackground: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }, modalContainer: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10, }, modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }, input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10, }, });

