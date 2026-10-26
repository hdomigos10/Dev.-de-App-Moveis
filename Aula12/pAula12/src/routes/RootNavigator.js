import{createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

import TelaDetalhes from '../pages/TelaDetalhes';

export default function RootNavigator({ navigation }) {
    return(
        <Stack.Navigator id='RootStack' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Principal" component={TabNavigator} />
            <Stack.Screen name="Detalhes" component={TelaDetalhes} />
        </Stack.Navigator>
    )
}