import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.purpleBox}> Hello World! </Text>
        </View>

        <Text>w: {width}, h: {height}</Text>
    </View>
   
  )
}


const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    }
});