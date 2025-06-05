/*
🔥 Exercício 1️⃣: Crie uma tela de boas-vindas com seu nome, uma imagem de perfil (pode ser de qualquer URL), e um botão que mostra um 
  alerta com a mensagem"Show! Você clicou no botão!".
*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Biblioteca de ícones do React Native

export default function LoginScreen() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const mostrarAlertaLogin = () => {
    Alert.alert(
      "Você fez login!",
      `Email: ${email}\nSenha: ${senha}`
    );
  };

  const tema = {
    fundo: temaEscuro ? "#222" : "white",
    texto: temaEscuro ? "white" : "black",
    fundoInput: temaEscuro ? "#333" : "white",
    bordaInput: temaEscuro ? "#555" : "#ddd",
    botoes: "#8a2be2",
    placeholderInput: temaEscuro ? "#aaa" : "#888",
    containerTotal: temaEscuro ? "#8a2be2" : "#8a2be2",
  };

  return (
    <View style={[styles.container, { backgroundColor: tema.containerTotal }]}>
      <View style={styles.parteRoxa}>
        <View style={styles.imagemPerfil}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12930/12930643.png' }}
            style={{ width: 140, height: 140, borderRadius: 60 }}
          />
        </View>
      </View>

      <View style={[styles.containerBranco, { backgroundColor: tema.fundo }]}> {/* Utiliza tanto o Style criado tanto do tema do componente Tema*/}
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end', // Vai para o canto direito
            marginTop: -90,
            marginBottom: 40,
            backgroundColor: tema.botoes,
            borderRadius: 30,
            width: 45,
            padding: 10,
            alignItems: 'center',
            fontWeight: 'bold',
          }}
          onPress={() => setTemaEscuro(!temaEscuro)}
        >
          <Text style={{ fontSize: 20 }}>
            {temaEscuro ? "☀" : "🌙"}
          </Text>
        </TouchableOpacity>

        <View style={[styles.containerInputs, { backgroundColor: tema.fundoInput, borderColor: tema.bordaInput }]}>
          <Icon name="mail-outline" size={20} color={tema.placeholderInput} style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={tema.placeholderInput}
            style={[styles.inputs, { color: tema.texto }]}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={[styles.containerInputs, { backgroundColor: tema.fundoInput, borderColor: tema.bordaInput }]}>
          <Icon name="lock-closed-outline" size={20} color={tema.placeholderInput} style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor={tema.placeholderInput}
            secureTextEntry={!senhaVisivel}
            style={[styles.inputs, { color: tema.texto }]}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Icon
              name={senhaVisivel ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={tema.placeholderInput}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.botaoLogin, { backgroundColor: tema.botoes }]} onPress={mostrarAlertaLogin}>
          <Text style={styles.loginText}> LOGIN </Text>
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
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8a2be2",
  },
  imagemPerfil: {
    backgroundColor: "#8a2be2",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
  },
  containerBranco: {
    flex: 1, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 230, 
    padding: 30,
    justifyContent: 'center',
  },
  containerInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15, 
    marginTop: 40,
    backgroundColor: 'white',
  },
  inputs: {
    flex: 1,
    height: 50,
    color: 'black',
  },
  botaoLogin: {
    backgroundColor: "#8a2be2",
    borderRadius: 25,
    paddingVertical: 12,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});