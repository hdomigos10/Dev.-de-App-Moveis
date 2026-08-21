import { Text, View, StyleSheet } from "react-native";

export default function Caixa({cor, numero}){
    return(
        <View style={[estilo.caixa, {backgroundColor: cor}]}>
            <Text style={estilo.texto}>{numero}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    caixa: {
        width: 80,
        height: 80,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})