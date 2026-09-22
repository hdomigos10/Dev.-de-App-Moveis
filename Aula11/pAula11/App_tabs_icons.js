//Importando as bibliotecas de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importando as telas que serão utilizadas
import Home from './src/pages/Home';
import Profile from './src/pages/Profile.js';
import Sobre from './src/pages/Sobre.js';

//Importanto a biblioteca de ícones Feather
import {Feather} from '@expo/vector-icons';

//Instanciando um objeto de navegação do tipo bottonTab
const Tab = createBottomTabNavigator();

export default function App(){
  return (
  <NavigationContainer>
    <Tab.Navigator
        screenOptions= {({route})=>({
          tabBarActiveTintColor: '#2805f1',
          tabBarInactiveTintColor: '#5B5B5B',
          tabBarStyle: {height: 70, paddingBottom: 8},
          tabBarIcon: ({color, size}) => {
            const nomeIcone = route.name === "Home" ? "home" :
            route.name === "Profile" ? "user" :
            'settings';
            return <Feather name={nomeIcone} size={size} color={color} />
        }
        })}
    >
      <Tab.Screen name="Home" options={{title: 'Início'}} component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}