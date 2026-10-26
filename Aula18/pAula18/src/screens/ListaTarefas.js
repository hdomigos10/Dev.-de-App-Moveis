import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "../config/api";
import { useState, useEffect } from "react";

export default function ListarTarefas({ navigation }) {
  //Objeto que armazena as tarefas
  const [tasks, setTasks] = useState([]);
  //Interruptor que mostra se esta atualizando
  const [carregando, setCarregando] = useState(true);
  //Objeto para capturar os erros
  const [erro, setErro] = useState(null);

  async function getTasks() {
    try {
      setErro(null);
      setCarregando(true);

      //Fazendo o GET na URL e salvando o resultado
      const resposta = await fetch(`${API_URL}/tarefas`);
      //Se o servidor responder qualquer coisa diferente de 200, lança um erro
      if (!resposta.ok) {
        throw new Error(`Servidor respondeu com erro ${resposta.status}`);
      }
      //Converter a resposta do fetch em JSON
      const dados = await resposta.json();
      //Setando as tarefas no objeto
      setTasks(dados);
    } catch (error) {
      setErro(`Erro no getTasks: ${error.message}`);
      console.error(`Erro no getTasks: ${error.message}`);
    } finally {
      //Informando a aplicação que a carga de tasks finalizou (com erro ou não)
      setCarregando(false);
    }
  }

  //Garante que a getTasks será executada uma única vez quando a página abrir
  useEffect(() => {
    getTasks();
  }, []);

  if (carregando) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Carregando as tarefas...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View>
        <Text>{erro}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.titulo}</Text>}
      />
      <TouchableOpacity onPress={() => navigation.navigate("NovaTarefa")}>
        <Text>+ Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}
