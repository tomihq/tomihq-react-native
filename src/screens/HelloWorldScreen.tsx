import { Text, View } from "react-native";
export const HelloWorldScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>Hello from React Native!</Text>
    </View>
  )
}
