import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/pages/Home.js';
import Profile from './src/pages/Profile.js';
import Sobre from './src/pages/Sobre.js';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}