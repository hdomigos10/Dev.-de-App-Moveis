import { StyleSheet, Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.tela}>
      <Text style={styles.texto}>Tela Principal</Text>
      <Button
        title="Ir para Sobre"
        color="#118AB2"
        onPress={() => navigation.navigate('TelaSobre')}
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
