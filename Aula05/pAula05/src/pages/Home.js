import {StyleSheet, Text, View, Platform} from 'react-native';

export default function Home() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoPrincipal}>Bem Vindos ao Sistema!</Text>
            <Text>{Platform.OS}</Text>
            <Text>{Platform.Version}</Text>
            <Text>{Platform.isTv? 'É': 'Não é'}</Text>


            <View style= {estilos.caixaComSombra}>


            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#6e706e',
    },
    textoPrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#03061a',
    },
    caixaComSombra: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shawdowRadius: 4,
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 6,
                
            },
    })
}  
})