import {StyleSheet, Text, View} from 'react-native';


export default ({texto}) => (
    <View style={estilos.caixa}>
        <Text>{texto}</Text>
    </View>
)

const estilos = StyleSheet.create({
    caixa: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '50%',
        marginBottom: 12,
        alignItems: 'center',
        alignSelf: 'center',
       
    }
})