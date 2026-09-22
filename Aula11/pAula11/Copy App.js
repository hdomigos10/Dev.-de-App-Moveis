//Importando o componente de navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importando as telas que serão utilizadas na navegação
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

//Instanciando um objeto de navegção do tipo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: "#21295C"},
          headerTintColor: "#fff",
          headerTitleStyle: {fontWeight: "bold"},
          
        }}
      >

        <Stack.Screen name='TelaHome' component={Home} options={{ title: "Pagina Principal" }} />
        <Stack.Screen name='TelaSobre' component={Sobre} options={{ title: "Pagina Sobre", headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
