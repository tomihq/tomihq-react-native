import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'

const App = () => {
  return (
   <PaperProvider
    settings={{
      icon: (props) => <IonIcon {...props} />
    }}
   >
     <SafeAreaView style={{flex: 1}}>
      {/* <CounterM3Screen/> */}
      <BoxObjectModelScreen/>
    </SafeAreaView>
   </PaperProvider>
  )
}

export default App