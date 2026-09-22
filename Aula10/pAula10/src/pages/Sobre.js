Import {Button} from 'react-native';
Import {StyleSheet, Text, View} from 'react-native';

export default function Sobre() {
    return (
        <View>
            <Text>Tela Sobre</Text>
            <Text>Essa tela foi empilhada sobre o Home</Text>
            <Button 
                title="Voltar para Home"
                color="#094094"
                onPress={()=> console.log("Clicar em voltar")}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex
    }
})