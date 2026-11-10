import { Button, Text, View } from "react-native";

export default function Playing({navigation}){
    return(
        <View>
            <Text>Playing Now</Text>
            <Button 
                title="Go to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}