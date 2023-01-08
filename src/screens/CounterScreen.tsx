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
          style={styles.fabLocationBL}
        >
          <View style={styles.fab}> 
            <Text style={styles.fabText}>-1</Text> 
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => setCounter(prev => prev + 1)}
          accessibilityLabel="Increase Counter"
          style={styles.fabLocationBR}
        >
          <View style={styles.fab}> 
              <Text style={styles.fabText}>+1</Text> 
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
  title: {
    fontSize: 35, 
    textAlign: 'center', 
    top: -15
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 40,
    left: 25
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 40,
    right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
})