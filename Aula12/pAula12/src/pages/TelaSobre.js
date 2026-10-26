import { Button, Text, View } from "react-native";

export default function TelaSobre({ navigation }) {
  return (
    <View style={{ flex: 1,justifyContent: "center", alignItems: "center",}}>
      <Text  style={{fontSize: 24, fontWeight: "bold",color: "#21295c", }}>Sobre</Text>
    <Button 
          title="Abrir menu"
          onPress={()=>navigation.openDrawer()}
          />
    </View>
  );
}