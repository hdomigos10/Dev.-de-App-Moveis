import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function NovaTarefa({navigation}) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState();
    const [enviando, setEnviando] = useState(false);

    async function saveTask() {
       //Se não tiver totulo (Obrigatorio) não salva a tarefa
        if(titulo.trim()){
            console.log("Titulo da tarefa e o obrigatório:");
            Alert.alert ("Ops!", "Ttiulo da Tarefa é obrigatório!");
            return;
        }
        //Notifica o APP que esta conectado a uma API para enviar dados
        setEnviando(true);
        try{
            //Inicia uma requisição POSt com os dados do formulario
            const response = await fetch(`${API_URL}/tarefas`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({titulo, descricao})
            });

            if(!response.ok){
                const corpoErro = await response.json().catch(() => ({}));
                console.log(`Erro ao enviar tarefa para o servidor: ${corpoErro}`);
                throw new Error (`Erro ao enviar tarefa para o servidor: ${corpoErro}`)
            }

            navigation.goBack();
        }catch (error){
            Alert.alert("Erro ao salvar", "Erro ao salvar tarefa no servidor");
        }finally{
            setEnviando(false);
        }
    }

    return(
        <ScrollView>
            <Text>Nova Tarefa</Text>

            <View>
                <Text>Titulo da Tarefa</Text>
                <TextInput
                    placeholder="Ex.: Enviar e-mail para o cliente"
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>
            <View>
                <Text>Descrição da Tarefa</Text>
                <TextInput
                    placeholder="Ex.: Detalhes da tarefa XPTO..."
                    value={descricao}
                    onChangeText={setDescricao}
                />
            </View>
            <TouchableOpacity onPress={saveTask}>
                <Text>Salvar Tarefa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}