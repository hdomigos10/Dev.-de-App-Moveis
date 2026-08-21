import { ScrollView, StyleSheet, View } from "react-native";
import Caixa from "../components/Caixa";

export default function ScrollList() {
  return (
    <View style={estilo.container}>
      <ScrollView style={estilo.scroll}>
        <Caixa texto="Caixa 1" />
        <Caixa texto="Caixa 2" />
        <Caixa texto="Caixa 3" />
        <Caixa texto="Caixa 4" />
        <Caixa texto="Caixa 5" />
        <Caixa texto="Caixa 6" />
        <Caixa texto="Caixa 7" />
        <Caixa texto="Caixa 8" />
        <Caixa texto="Caixa 9" />
        <Caixa texto="Caixa 10" />
        <Caixa texto="Caixa 11" />
        <Caixa texto="Caixa 12" />
        <Caixa texto="Caixa 13" />
        <Caixa texto="Caixa 14" />
        <Caixa texto="Caixa 15" />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0101c9",
    paddingTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ec760f",
    
  },
});
