import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface Props {
    accessibilityLabel: string;
    position?: 'br' | 'bl';
    title: string;
    onPress: () => void;
}

export const Fab = ({accessibilityLabel, title, position, onPress}: Props) => {
  return (
      <View style={[styles.fabLocation, 
        (position === 'br'?styles.right:styles.left)
       ]}>
          <TouchableNativeFeedback
          onPress={() => onPress()}
          accessibilityLabel={accessibilityLabel}
          background={TouchableNativeFeedback.Ripple('#2B425B', false, 30)}
        >
          <View style={styles.fab}> 
            <Text style={styles.fabText}>{title}</Text> 
          </View>
        </TouchableNativeFeedback>
      </View>
  )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 40,
      },
      left: {
        left: 25
      },
      right: {
        right:25
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3,
      },
      fabText: {
        color: 'white',
        fontSize: 22,
        
      }
})
