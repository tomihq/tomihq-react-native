import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DimensionScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.purpleBox}> Hello World! </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%'
    }
});