import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const ITENS_MENU = [
  { icone: "user", texto: "Meu Perfil" },
  { icone: "settings", texto: "Configurações" },
  { icone: "bell", texto: "Notificações" },
  { icone: "log-out", texto: "Sair" },
];

export default function App() {
  return (
    <View style={styles.container}>
      {ITENS_MENU.map((atual) => (
        <ItemMenu icone={atual.icone} texto={atual.texto} key={atual.texto} />
      ))}
      <Image
        source={{ uri: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=60,fit=pad,format=webp/uploads/2026/06/Neymar-2-scaled-aspect-ratio-512-320-3.jpg' }}
        style={styles.imagem}
      />
    <Image 
    style={styles.imagem}
    source={require('./src/assets/image1.jpg')}
    />
    </View>
  );
}

function ItemMenu({ icone, texto }) {
  return (
    <TouchableOpacity style={styles.linha}>
      <View style={styles.iconeCirculo}>
        <Feather name={icone} size={20} color="#4355dc" />
      </View>
      <Text style={styles.textoLinha}>{texto}</Text>
      <Feather name="chevron-right" size={20} color="#15ab29" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    paddingHorizontal: 16,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#0f0101",
  },
  iconeCirculo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#118ab2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textoLinha: {
    fontSize: 16,
    flex: 1,
  },
  imagem: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});