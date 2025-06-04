/*
🔥 Exercício 2️⃣: Monte uma mini lista de tarefas usando View, Text e TouchableOpacity. Cada item da lista deve poder ser marcado como concluído
(altere a cor de fundo ou sublinhe o texto ao tocar).
*/

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar Física para sexta", concluida: false },
    { id: 2, texto: "Estudar Biologia para sexta", concluida: false },
    { id: 3, texto: "Estudar React Native", concluida: false },
  ]);

function marcarConcluida(id) {
    setTarefas(
      tarefas.map(tarefa =>  // Percorre todas as tarefas e retorna uma nova lista
        tarefa.id === id // Se o id da tarefa for igual ao id recebido
          ? { ...tarefa, concluida: !tarefa.concluida } // Retorna uma nova tarefa com o campo 'concluida' invertido, true vai para false e vice-versa
          : tarefa // Caso contrário, retorna a tarefa original
      )
    );
}

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> Lista de Tarefas 📚 </Text>

      {/* Renderiza cada tarefa da lista */}
      {tarefas.map(tarefa => (
        <TouchableOpacity
          key={tarefa.id} // Cada item vai ter uma chave única, para não dar erro de renderização
          style={[
            styles.tarefa,
            tarefa.concluida && styles.concluida // Se estiver concluída, aplica os dois estilos estilo 
          ]}
          onPress={() => marcarConcluida(tarefa.id)}
        >
          {/* Mostra o texto da tarefa. Se estiver concluída, aplica o estilo riscado */}
          <Text style={tarefa.concluida ? styles.textoConcluido : styles.textoNormal}>
            {tarefa.texto}
          </Text>
          
        </TouchableOpacity>
      ))}

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
  titulo: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tarefa: {
    width: 250,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
  },
  concluida: {
    backgroundColor: '#3cb043',
  },
  textoNormal: {
    fontSize: 20,
    color: 'black',
  },
  textoConcluido: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'line-through',
  },
});