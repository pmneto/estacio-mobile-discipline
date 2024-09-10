import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayData = ({ data }) => {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>🌡️ Temperatura: {data.temperature} °C</Text>
      <Text style={styles.dataText}>💧 Umidade: {data.humidity} %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#0073e6', // Azul tom Estácio
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Sombra para Android
  },
  dataText: {
    fontSize: 24,
    color: '#fff', // Texto branco para contraste
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default DisplayData;
