import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayData = ({ data }) => {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Temperatura: {data.temperature} °C</Text>
      <Text style={styles.dataText}>Umidade: {data.humidity} %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default DisplayData;
