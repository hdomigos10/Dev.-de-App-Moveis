import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import {useState, useEffect} from 'react';

import { API_URL } from "../config/api";

export default function ListaTarefas({navigation}){
    //Objeto que armazenas as tarefas
    const [tasks, setTasks] = useState([]);
    //Interruptor que mostra se esta atualizando
    const [carregando, setCarregando] = useState(true);
    //Objeto para capturar os erros
    const [erro, setErro] = useState(null);

    async function getTasks(){
        try{
            setErro(null);
            setCarregando(true);

            //Fazendo o GET na URL e salvando o resultado
            const resposta = await fetch(`${API_URL}/tarefas`);
            //Se o servidor responder qualquer coisa <> 200 entao entra no IF
            if(!resposta.ok){
                throw new Error(`O servidor respondeu com erro: ${resposta.status}`);
            }
            //Converter a resposta do fetch em JSON
            const dados = await resposta.json();
            //Setando as tarefas no objeto
            setTasks(dados);
        }catch(erro){
            setErro(`Erro no getTasks: ${erro.message}`);
            console.log(`Erro no getTasks: ${erro.message}`);
        }finally{
            //Informando a aplicacao que a carga de tasks finalizou (com erro ou nao)
            setCarregando(false);
        }
    }

    async function alternarConcluida(tarefa){
        //Atualização "otimista"altera primerio o local e depois o servidor/API
        console.log("Entrou na alternarConcluida");
        console.log("Tarefa: ", JSON.stringify(tarefa));
        // Atualizando a tarefa na interface
        setTasks((atuais) =>
            atuais.map((t) => (t.id == tarefa.id ? {...t, concluida: !tarefa.concluida} : t))
        )
        //Atualizando a tarefa na API
        try{
            //setCarregando(true)
            const resp = await fetch(`${API_URL}/tarefas/${tarefa.id}/concluir`, {method: `PATCH`});
            if(!resp.ok){
                throw new Error("Falha ao atualizar no servidor");
            }
        }catch(err){
            setTasks((atuais) => atuais.map ((t) => (t.id === tarefa.id ?
                {...t, concluida : tarefa.concluida} : t)
                )
            )
        }finally{
            setCarregando(false);
        }
    }

    //Garante que sera executada uma unica vez a getTasks quando a pagina é renderizada
    useEffect(()=>{
        getTasks();
    }, []);

    //Se estiver carregando os dados ele nao mostra o Flatlist
    if(carregando){
        return(
            <View>
                <ActivityIndicator size="large" />
                <Text>Carregando as tarefas...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>Lista de Tarefas</Text>

            <FlatList 
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>(<TouchableOpacity onPress={()=>alternarConcluida(item)}><Text>{item.titulo} | {item.concluido ?
                'Sim': 'Não'}</Text></TouchableOpacity>)}
            />
            <TouchableOpacity
                onPress={()=> navigation.navigate('NovaTarefa')}
            >
                <Text>+ Nova tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}