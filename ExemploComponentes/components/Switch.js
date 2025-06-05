import React, { useState } from "react";
import { View, Switch, Text } from "react-native";

export default function MeuSwitch() {
    const [modoEscuro, setModoEscuro] = useState(false);

    return (
        <View style={{ alignItems: "center", padding: 24 }}>
            
            <Text style={{ marginBottom: 10, color: "white" }}>
                Modo Escuro: {modoEscuro ? "Ativado" : "Desativado"}
            </Text>

            <Switch 
                value={modoEscuro}
                onValueChange={setModoEscuro}
                thumbColor={modoEscuro ? "#222" : "#eee"}
                trackColor={{ false: "#aaa", true: "#111" }}
            />

        </View>
    )
}