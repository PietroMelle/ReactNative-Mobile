import { View } from "react-native"
import Botao from "./components/Botao"
import Switch from "./components/Switch"
import Slider from "./components/Slider"

export default function App() {
  return (
    <View style={{ marginTop: 350 }}>
      <Botao titulo="Clique Aqui" aoPressionar={() => alert("Botão clicado!")} /> {/* Usando props no titulo e no aoPressionar */}
      <Switch /> {/* Componente Switch */}
      <Slider /> {/* Componente Slider */}
    </View>
  )
}