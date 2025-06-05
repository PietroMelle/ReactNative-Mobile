import React, {useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function MeuSlider() {
    const [valor, setValor] = useState(0); // Estado para armazenar o valor do slider

    return (
        <View style={{ padding: 24 }}>
            <Text style={{ marginBottom: 10, color: "white"}}>
                Volume: {Math.round(valor * 100)}%
            </Text>

            <Slider 
                value={valor}
                onValueChange={setValor}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                minimumTrackTintColor="#007bff"
                maximumTrackTintColor="#bbb"
                thumbTintColor="#333"
            />
        </View>
    )
}