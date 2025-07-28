import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WarehouseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Här kommer lageröversikten.</Text>
    </View>
  );
};

export default WarehouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
