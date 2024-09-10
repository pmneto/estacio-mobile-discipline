import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import DisplayData from './components/DisplayData';

export default function App() {
  const [data, setData] = useState({ temperature: null, humidity: null });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Função para buscar os dados mais recentes da API CosmosDB
  const fetchData = () => {
    setLoading(true);  // Começa a mostrar o indicador de carregamento
    fetch(' sua URL da FUNCTION Aqui')  // Atualize com o endpoint da sua API
      .then(response => response.json())
      .then(json => {
        setData({
          temperature: json.temperatura,
          humidity: json.umidade
        });
        setLoading(false);  // Oculta o indicador de carregamento
      })
      .catch(error => {
        console.error(error);
        setLoading(false);  // Oculta o indicador de carregamento
      });
  };

  // useEffect para buscar os dados ao carregar o componente
  useEffect(() => {
    fetchData();  // Chama a função fetchData ao carregar o componente
  }, []);

  // Função chamada ao puxar para atualizar (pull-to-refresh)
  const onRefresh = () => {
    setRefreshing(true);  // Mostra o indicador de atualização
    fetchData();  // Faz a requisição de atualização
    setRefreshing(false);  // Oculta o indicador de atualização
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.title}>Monitoramento de Bolos</Text>
      <DisplayData data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
