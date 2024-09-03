import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import DisplayData from './components/DisplayData';

export default function App() {
  const [data, setData] = useState({ temperature: null, humidity: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://<nome-da-azure-function>.azurewebsites.net/api/obter-dados')
      .then(response => response.json())
      .then(json => {
        setData({
          temperature: json.temperature,
          humidity: json.humidity
        });
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Bolos</Text>
      <DisplayData data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
