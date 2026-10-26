import { Text, View } from "react-native";
import { use, useState } from "react";

import { API_URL } from "../config/api";
import { FlatList } from "react-native-web";

export default function ListaTarefaScreen({ navigation }) {
  //Dados vindo da API

  const [filmes, setFilmes] = useState([]);

  //Interruptor para informar se já carregou

  const [carregando, setCarregando] = useState(true);

  //Erros

  const [erro, setErro] = useState(null);

  //Função ASSINCRONA que obtem os dados da API

  async function getData() {
    try {
      //Limpando o objeto de erro

      setErro(null);
      setCarregando(true);

      //Acessando a API e fazendo a requisição GET

      const resposta = await fetch(`${API_URL}/movies.json`);

      //Se der erro na requisição tratamos o erro

      if (!resposta.ok) {
        throw new Error("O servidor respondeu com erro: " + resposta.status);
      }

      const dados = await resposta.json();

      setFilmes(dados.movies);
      console.log(`Dados vindos da API: ${JSON.stringify(dados.movies)}`);
    } catch (error) {
      setErro(error.message);
    } finally {
      //Informar a aplicação que foi finalizada a requisição
      setCarregando(false);
    }
  }

  //Garantindo que o codigo ira executar uma unica vez quando o componente for renderizado

  useEffect(() => {
    getData();
  }, []);

  //Se estiver carregando ele mostra um scroll e não mostra os dados
  if (carregando) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Tarefas</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.textoListagem}>
            {item.title} | {item.releaseYear}{" "}
          </Text>
        )}
      />

      <Button title="Atualizar" onPress={() => getData()} />
      <Button
        title="Novo Filme"
        onPress={() => navigation.navigate("NovaTarefa")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingStart: 20,
    paddingTop: 35,
  },
  textoListagem: {
    fontSize: 18,
  },
});
