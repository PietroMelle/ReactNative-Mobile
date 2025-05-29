import { useState } from "react";
import {StyleSheet, Text, ScrollView, View, Button, Image, Alert} from "react-native";

export default function App() {
  function mostrarCurtida() {
    Alert.alert("Botão pressionado!", "Parábens, você curtiu! 👍");
  }

  function mostrarCompartilhar() {
    Alert.alert("Botão pressionado!", "Parábens, você compartilhou! 💭");
  }

  function mostrarComentar() {
    Alert.alert("Botão pressionado!", "Parábens, você comentou! 🆒");
  }

  function mostrarEditar() {
    Alert.alert("Botão pressionado!", "Parábens, você editou! ✌");
  }

  return (

    <ScrollView>
      <View style={styles.container}>

      <View>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 25}}>🔴 DESAFIO DO BLOCO 🔴</Text>
      </View>

      <View style={styles.sombraBorda}>
        <View style={[styles.blocoTexto1, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
          <Image
          source={require('./assets/desafioBloco1.png')}
          style={styles.styleImagem}
          />
          <Text style={styles.texto1}> Esse <Text style={{color: "skyblue"}}>desafio</Text> está muito difícil! 😢 </Text>
        </View>
      </View>

      <View style={styles.sombraBorda}>
        <View style={[styles.blocoTexto2, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
          <Image
          source={require('./assets/conseguindo.png')}
          style={styles.styleImagem}
          />
          <Text style={styles.texto2}> Mas vou <Text style={{color: "white"}}>conseguir</Text>! 💡 </Text>
        </View>
      </View>

      <View style={styles.sombraBorda}>
        <View style={[styles.blocoTexto3, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
          <Image
          source={{
          uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          }}
          style={styles.styleImagem}
          />
          <Text style={styles.texto3}> Está <Text style={{color: "purple"}}>dando</Text> tudo certo! 🤩 </Text>
        </View>
      </View>
      
      <View style={styles.sombraBorda}>
        <View style={[styles.blocoTexto4, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
          <Image
          source={{
          uri: "https://compras.wiki.ufsc.br/images/5/56/Erro.png",
          }}
          style={styles.styleImagem}
          />
          <Text style={styles.texto4}> <Text style={{color: "pink"}}>Começou</Text> a dar erros... 😭 </Text>
        </View>
      </View>

      <View style={styles.sombraBorda}>
        <View style={[styles.blocoTexto5, { flexDirection: "row", alignItems: "center", justifyContent: "center" }]}>
          <Image
          source={{
          uri: "https://cdn-icons-png.freepik.com/256/5735/5735786.png?semt=ais_hybrid",
          }}
          style={styles.styleImagem}
          />
          <Text style={styles.texto5}> Consegui <Text style={{color: "white"}}>terminar</Text>! 🥳🎉🎈 </Text>
        </View>
      </View>

      <View
        style={{
          padding: 3,
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Button title="Curtir" onPress={mostrarCurtida} />
      </View>

      <View
        style={{
          padding: 3,
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Button title="Compartilhar" onPress={mostrarCompartilhar} />
      </View>

      <View
        style={{
          padding: 3,
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Button title="Comentar" onPress={mostrarComentar} />
      </View>

      <View
        style={{
          padding: 3,
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Button title="Editar" onPress={mostrarEditar} disabled={true} />
      </View>
      </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  texto1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
    flexDirection: "row",
    justifyContent: "center"
  },
  texto2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  texto3: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "yellow",
  },
  texto4: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "skyblue",
  },
  texto5: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
  },
  sombraBorda: {
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 12,
    marginTop: 50,
  },
  blocoTexto1: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
    width: 350,
    alignItems: "center",
  },
  blocoTexto2: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    width: 350,
    alignItems: "center",
  },
  blocoTexto3: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "yellow",
    width: 350,
    alignItems: "center",
  },
  blocoTexto4: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "skyblue",
    width: 350,
    alignItems: "center",
  },
  blocoTexto5: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "orange",
    width: 350,
    alignItems: "center",
  },
  imagemContainer: {
    borderRadius: 30,
    overflow: "hidden", // garante que a imagem fique arredondada
    alignItems: "center",
    justifyContent: "center",
  },
  styleImagem: {
    width: 45,
    height: 45,
    borderRadius: 10,
  }
});
