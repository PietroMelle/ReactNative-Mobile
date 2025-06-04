/*
🔥 Exercício 3️⃣: Implemente um card interativo com Image, Text e Pressable. Quando pressionar o card, troque a cor de fundo 
  e exiba um feedback visual.
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardAtivo // Aplica cor só enquanto está pressionado
        ]}
      >
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M84B6bVwoKai2k8B7fEi7D93sw3qfsK2_A&s' }}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>Card Interativo</Text>
        <Text style={styles.descricao}>Toque no card para mudar a cor!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 260,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardAtivo: {
    backgroundColor: "green", // Cor só enquanto pressionado
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 16,
    color: '#333',
  },
});