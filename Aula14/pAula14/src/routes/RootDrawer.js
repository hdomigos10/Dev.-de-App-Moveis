import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

import MainTabs from "./MainTabs";
import TelaSobre from "../pages/TelaSobre";

export default function RootDrawer() {
  return (
    <Drawer.Navigator id="RootDrawer">
      {/*Tela Sabor Caseiro e Tela Sobre*/}
      <Drawer.Screen component={MainTabs} name="Principal" />
      <Drawer.Screen component={TelaSobre} name="Sobre" />
    </Drawer.Navigator>
  );
}
