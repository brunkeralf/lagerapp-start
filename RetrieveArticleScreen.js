// RetrieveArticleScreen.js import React, { useState } from 'react'; import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from 'react-native';

export default function RetrieveArticleScreen({ route, navigation }) { const { articles, setArticles, compartmentName } = route.params; const [selectedIndex, setSelectedIndex] = useState(null); const [retrieveQuantity, setRetrieveQuantity] = useState(''); const [isBlocked, setIsBlocked] = useState(false); const [modalVisible, setModalVisible] = useState(false);

const handleRetrieve = () => { const qty = parseInt(retrieveQuantity); if (isNaN(qty) || qty <= 0) return;

const updated = [...articles];
const article = updated[selectedIndex];

if (isBlocked) {
  article.blocked = Math.max(0, article.blocked - qty);
} else {
  article.quantity = Math.max(0, article.quantity - qty);
}

setArticles(updated);
setRetrieveQuantity('');
setModalVisible(false);

};

const renderArticle = ({ item, index }) => ( <TouchableOpacity style={styles.articleButton} onPress={() => { setSelectedIndex(index); setRetrieveQuantity(''); setIsBlocked(false); setModalVisible(true); }}> <Text style={styles.articleText}> {item.name} - Totalt: {item.quantity} (Spärrade: {item.blocked || 0}) </Text> </TouchableOpacity> );

return ( <View style={styles.container}> <Text style={styles.title}>UT – {compartmentName}</Text> <FlatList data={articles} renderItem={renderArticle} keyExtractor={(item, index) => index.toString()} />

<Modal visible={modalVisible} animationType="slide" transparent={true}>
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Hämta kolli</Text>
        <TextInput
          placeholder="Antal att hämta"
          keyboardType="numeric"
          value={retrieveQuantity}
          onChangeText={setRetrieveQuantity}
          style={styles.input}
        />
        <View style={styles.toggleRow}>
          <Button
            title={isBlocked ? 'Hämta SPÄRRADE' : 'Hämta OSPÄRRADE'}
            onPress={() => setIsBlocked(!isBlocked)}
          />
        </View>
        <Button title="HÄMTA" onPress={handleRetrieve} />
        <Button title="AVBRYT" onPress={() => setModalVisible(false)} color="grey" />
      </View>
    </View>
  </Modal>
</View>

); }

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }, articleButton: { backgroundColor: '#eee', padding: 15, marginBottom: 10, borderRadius: 10, }, articleText: { fontSize: 16 }, modalBackground: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }, modalContainer: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10, }, modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }, input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10, }, toggleRow: { marginBottom: 10, alignItems: 'center', }, });

