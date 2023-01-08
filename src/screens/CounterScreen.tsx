import { useState } from "react"
import { Text, View, TouchableOpacity, StyleSheet} from "react-native"

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Counter: {counter} </Text>
        <TouchableOpacity
          onPress={() => setCounter(prev => prev - 1)}
          accessibilityLabel="Decrease Counter"
        >
          <View style={styles.button}> 
            <Text> Decrease Counter</Text> 
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => setCounter(prev => prev + 1)}
          accessibilityLabel="Increase Counter"
        >
          <View style={styles.button}> 
              <Text> Increase Counter </Text> 
          </View>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 100
  },
  title: {
    textAlign: 'center', 
    fontSize: 35, 
    top: -15
  }
})