/*
🔥 Exercício 1️⃣: Crie uma tela de boas-vindas com seu nome, uma imagem de perfil (pode ser de qualquer URL), e um botão que mostra um 
  alerta com a mensagem"Show! Você clicou no botão!".
*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const mostrarAlertaLogin = () => {
    Alert.alert("Você fez login!");
  }

  return (
    <View style={styles.container}>

      <View style={styles.parteRoxa}>

        <View style={styles.imagemPerfil}>
          <Icon name="person-circle-outline" size={150} color="#fff" />
        </View>

      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!senhaVisivel} // Mostra ou esconde a senha
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Icon
              name={senhaVisivel ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={mostrarAlertaLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a2be2",
  },
  parteRoxa: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemPerfil: {
    backgroundColor: "#8a2be2",
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 230,
    padding: 30,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 120,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#000',
  },
  loginButton: {
    backgroundColor: "#8a2be2",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});