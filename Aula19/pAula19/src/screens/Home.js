import { View, Text, Button } from "react-native";

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Player" onPress={() => navigation.navigate("Playing")} />
    </View>
  );
}
