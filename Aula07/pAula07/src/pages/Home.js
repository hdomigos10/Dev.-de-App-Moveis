import {StyleSheet, View, Text} from 'react-native';
import PerfilCards from '../components/PerfilCards';

export default function Home() {
  return (
    <View style={estilos.tela}>
      <PerfilCards nome="Helto" cargo="CEO" />
      <PerfilCards nome="Detoni" cargo="Fazendeiro" />
    </View>

)}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    justifyContent: 'center',   
  },
  
})


