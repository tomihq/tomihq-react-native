import { useState } from "react"
import { Text, View, TouchableOpacity, StyleSheet} from "react-native"
import { Fab } from "../components";

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Counter: {counter} </Text>
        <Fab
          title={'-1'}
          accessibilityLabel = 'Decrease Counter'
          onPress={() => setCounter(prev => prev - 1)}
          position={'bl'}
        /> 

        <Fab
          title={'+1'}
          accessibilityLabel = {'Increase Counter'}
          onPress={() => setCounter(prev => prev + 1)}
          position={'br'}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 35, 
    textAlign: 'center', 
    top: -15
  },
 
})