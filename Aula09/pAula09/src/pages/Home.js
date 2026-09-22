import {Button, StyleSheet, View, Text, TextInput} from 'react-native';

import {useState} from 'react';

const dadosForm = {
    nome: '',
    idade: '',
    senha: '',
    maisInfos: ''
}

export default function Home() {
    const [nomeestado, setNomeestado] =  useState('');
    
    function aoDigitar(textoDigitado) {
        console.log(`Texto digitado: ${textoDigitado}`);
        setNomeestado(textoDigitado);
        dadosForm.nome = textoDigitado;
    }

    function aoEnviar() {
        // Destructuring do Objeto
        const { nome, idade, senha, maisInfos } = dadosForm;
        console.log('Formulário enviado: ', { 
            nome, 
            idade, 
            senha: '*'.repeat(senha.length), 
            maisInfos
         });
         //Chamada de backend para enviar os dados do formulário
    }
 
    return (
    <View style={styles.container}>
        <Text style={styles.textao}>{nomeestado}</Text>
        <View style={styles.containerInput}>
            <Text style={styles.label}>Nome</Text>
            <TextInput placeholder="Digite o seu texto aqui" 
            style={styles.input}
            onChangeText={aoDigitar}
            value={nomeestado}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Idade</Text>
        <TextInput  
        style={styles.input}
        placeholder ="Digite a sua idade"
        onChangeText={(texto) => { dadosForm.idade = texto}}
        keyboardType="numeric"
        />
      </View>
       <View style={styles.containerInput}>
        <Text style={styles.label}>Senha</Text>
        <TextInput  
        style={styles.input}
        placeholder ="Digite a sua senha"
        onChangeText={(texto) => { dadosForm.senha = texto}}
        secureTextEntry
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Fale mais sobre você</Text>
        <TextInput  
        style={styles.input}
        placeholder ="Conte um pouco sobre você"
        onChangeText={(texto) => { dadosForm.maisInfos = texto}}
        multiline={60}
        />
      </View>
      <Button 
      title="Enviar"
      color="#07799f"
      onPress={aoEnviar}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8b848b',
        flexDirection: 'column',
        gap: 10,
    },
    containerInput: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12,
        marginStart: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fffffffa',
    },
    textao: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})