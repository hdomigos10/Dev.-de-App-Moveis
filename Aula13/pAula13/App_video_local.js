import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//importando o hook
import { useVideoPlayer, VideoView } from "expo-video";

//apontando o arquivo com o video
const fonte = require("./src/assets/videos.video.mp4");

//configurando o player para exibir o video
const player = useVideoPlayer(fonte, (p) => {
  p.loop = true;
  p.play();
});

export default function App() {
  return (
    <View style={styles.container}>
      <VideoView style={{ width: "100%", height: "300" }} player={palyerConf} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
