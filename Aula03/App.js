import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './src/components/Caixa';

export default function App() {
  return (
    <>
      <View style={styles.containerPai}>
        <View style={styles.container}>
          <Caixa cor="#EF476F" numero={1} />
          <Caixa cor="#FFD166" numero={2} />
          <Caixa cor="#06D6A0" numero={3} />
          <Caixa cor="#06D6A0" numero={4} />
          <Caixa cor="#06D6A0" numero={5} />
          <Caixa cor="#06D6A0" numero={6} />
          <Caixa cor="#06D6A0" numero={7} />
        </View>
        <View style={styles.container2}>
          <Text>Container 2</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerPai:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignSelf: 'flex-start'
  },
  container2:{
    flex: 4,
    backgroundColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto'
  }
});
