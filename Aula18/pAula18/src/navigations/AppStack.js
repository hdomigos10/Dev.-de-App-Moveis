import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListarTarefas from '../screens/ListaTarefas';
import NovaTarefa from '../screens/NovaTarefa';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ListarTarefas" component={ListarTarefas} />
        <Stack.Screen name="NovaTarefa" component={NovaTarefa} />
    </Stack.Navigator>
  );
}