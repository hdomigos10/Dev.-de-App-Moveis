import { Button, StyleSheet, Text, View } from "react-native";

export default function Sobre({ navigation }) {
  return (
    <View style={styles.tela}>
      <Text style={styles.texto}>Tela Sobre</Text>
      <Button
        title="Voltar"
        color="#118AB2"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 14,
    color: "#5B5B5B",
    textAlign: "center",
    marginBottom: 24,
  },
});
