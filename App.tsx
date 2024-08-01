import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'

import IonIcon from 'react-native-vector-icons/Ionicons'
import { DimensionScreen } from './src/presentation/screens/DimensionScreen'
import { PositionScreen } from './src/presentation/screens/PositionScreen'
import { FlexScreen } from './src/presentation/screens/FlexScreen'

const App = () => {
  return (
   <PaperProvider
    settings={{
      icon: (props) => <IonIcon {...props} />
    }}
   >
     <SafeAreaView style={{flex: 1}}>
      {/* <CounterM3Screen/> */}
      <FlexScreen/>
    </SafeAreaView>
   </PaperProvider>
  )
}

export default App