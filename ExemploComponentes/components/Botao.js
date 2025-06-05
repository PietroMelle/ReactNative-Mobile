import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ titulo, aoPressionar }) { // props: titulo e aoPressionar
    return (
        <TouchableOpacity style={styles.botao} onPress={aoPressionar}>
        <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#0099ff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 130,
    },
    texto: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});