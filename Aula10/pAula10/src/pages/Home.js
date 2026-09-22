import {StyleSheet, Text, View, Button} from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo à tela principal!</Text>
      <Text style={styles.texto}>Essa é a tela Home do aplicativo</Text>
      <Button 
              title="Ir para sobre"
              color="#1142bd"
              onPress={()=> console.log("Clicou")}      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8dbdb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  texto: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  }
})