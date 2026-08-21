import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CartaoPerfil() {
    const lidarComClique = () => {
        alert('Conectado!');
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.cartao}>
                
                <Text style={estilo.nome}>Higor Domingos</Text>
                <Text style={estilo.cargo}>Analista de Dados</Text>

                <View style={estilo.foto}></View>

                <TouchableOpacity
                    style={estilo.botaoConectar}
                    
                    onPress={lidarComClique}
                >
                    <Text style={estilo.textoBotao}>Conectar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    cartao: {
        width: 280,
        padding: 60,
        borderRadius: 15,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(30, 30, 40)', 
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    cargo: {
        fontSize: 14,
        color: '#bbb',
        marginBottom: 16,
    },
    foto: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff', 
        borderRadius: 6,
        marginBottom: 20,
    },
    botaoConectar: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#faf8f8',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: '600',
    }
})