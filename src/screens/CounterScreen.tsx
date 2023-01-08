import { useState } from "react"
import { Text, View, Button} from "react-native"

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 35, top: -15}}>Counter: {counter} </Text>
        <Button
          onPress={() => setCounter(prev => prev - 1)}
          title="Decrease"
          color="#841584"
          accessibilityLabel="Decrease Counter"
        />

        <Button
          onPress={() => setCounter(prev => prev + 1)}
          title="Increase"
          color="#841584"
          accessibilityLabel="Increase Counter"
        />

    </View>
  )
}
