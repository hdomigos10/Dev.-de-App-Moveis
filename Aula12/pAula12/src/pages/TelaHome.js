import { Button, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-web";

export default function TelaHome({ navigation }) {
  return (
    <SafeAreaView style={styles.tela}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.nota}>Para abrir o menu lateral, clique no botão abaixo</Text>
      <Button 
      title="Abrir detalhes"
      onPress={()=>navigation.getParent('RootStack')?.navigate('Detalhes')}
      />
    </SafeAreaView>
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
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#21295c",
  },
  nota:{
    fontSize:13,
    color:"#21295c",
    textAlign:'center',
    marginTop:24
  }
});