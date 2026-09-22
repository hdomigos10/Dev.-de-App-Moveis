//Importando as bibliotecas de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importando as telas que serão utilizadas
import Home from './src/pages/Home';
import Profile from './src/pages/Profile.js';
import Sobre from './src/pages/Sobre.js';

//Instanciando um objeto de navegação do tipo bottonTab
const Tab = createBottomTabNavigator();

export default function App(){
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}